# Instructions for Claude/Kiro: Using Code Review Graph

## Priority: Use Graph Database Over Grep

When this project has a `.code-review-graph/graph.db` file, **ALWAYS prefer SQL queries over grep/grepSearch** for code exploration.

## Quick Reference

### Check if Graph Exists
```bash
test -f .code-review-graph/graph.db && echo "Graph available" || echo "Graph not available"
```

### Common Query Patterns

**Find all functions/components:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path, line_start FROM nodes WHERE kind='Function' ORDER BY name;"
```

**Search by name pattern:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path, line_start FROM nodes WHERE name LIKE '%SearchTerm%';"
```

**Find files by path pattern:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT DISTINCT file_path FROM nodes WHERE file_path LIKE '%pattern%';"
```

**Full-text search in code:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path FROM nodes_fts WHERE nodes_fts MATCH 'search_term';"
```

**Get file structure:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, kind, line_start FROM nodes WHERE file_path LIKE '%filename%' ORDER BY line_start;"
```

**Find dependencies:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT n2.name, n2.file_path FROM edges e JOIN nodes n1 ON e.source_id = n1.id JOIN nodes n2 ON e.target_id = n2.id WHERE n1.name = 'FunctionName';"
```

**Count by type:**
```bash
sqlite3 .code-review-graph/graph.db "SELECT kind, COUNT(*) FROM nodes GROUP BY kind;"
```

## Decision Tree

1. **Need to find a function/component?**
   → Query nodes table by name

2. **Need to search code content?**
   → Use nodes_fts full-text search

3. **Need to understand file structure?**
   → Query nodes filtered by file_path

4. **Need to find dependencies?**
   → Query edges table with joins

5. **Need actual code content?**
   → Use readFile/readCode with line numbers from graph query

## Benefits

- **90% less tokens**: Query metadata instead of reading files
- **Faster**: SQL is faster than text search
- **Structured**: Get parsed code structure, not raw text
- **Accurate**: Understand relationships and dependencies

## Workflow Example

Instead of:
1. ❌ grepSearch for "ContactPage"
2. ❌ Read entire file
3. ❌ Search for related components

Do this:
1. ✅ Query: `SELECT name, file_path, line_start FROM nodes WHERE name='ContactPage';`
2. ✅ Query: `SELECT name FROM edges WHERE source_id = (SELECT id FROM nodes WHERE name='ContactPage');`
3. ✅ Only read specific files/lines if needed

## Important Notes

- Graph database is in `.code-review-graph/graph.db`
- Contains 53 nodes, 199 edges (for this project)
- Automatically updated with `code-review-graph build`
- Use `sqlite3` command for queries
- Always check if graph exists before using
- Fall back to grep only if graph unavailable

## Schema Quick Reference

**nodes table:**
- id, kind, name, qualified_name, file_path
- line_start, line_end, language
- parent_name, params, return_type, modifiers
- signature, community_id

**edges table:**
- source_id, target_id, kind (import, call, etc.)

**nodes_fts:**
- Full-text search virtual table

## Token Optimization Strategy

1. **First**: Check if `.code-review-graph/graph.db` exists
2. **Then**: Use SQL queries to find what you need
3. **Finally**: Only read specific files/lines when necessary
4. **Avoid**: Reading entire files or using grep when graph is available

This approach can reduce token usage by 80-90% for code exploration tasks.
