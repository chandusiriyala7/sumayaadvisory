# Code Review Graph - Token Optimization Guide

## Overview

This project uses `code-review-graph` to create a structured database of the codebase, enabling efficient queries without using grep or reading entire files. This significantly reduces token usage.

## Setup

The graph database is already built and located at `.code-review-graph/graph.db`.

To rebuild the graph after code changes:
```bash
code-review-graph build
```

## Database Schema

The graph database contains:
- **nodes**: 53 code entities (files, functions, components)
- **edges**: 199 relationships between nodes
- **nodes_fts**: Full-text search index
- **communities**: Code module groupings
- **flows**: Data flow analysis

### Nodes Table Structure
- `id`: Unique identifier
- `kind`: Type (File, Function, Class, etc.)
- `name`: Entity name
- `qualified_name`: Full qualified name
- `file_path`: Absolute file path
- `line_start`, `line_end`: Location in file
- `language`: Programming language
- `parent_name`: Parent entity
- `params`, `return_type`, `modifiers`: Function metadata
- `signature`: Code signature
- `community_id`: Module grouping

## Efficient Query Examples

### Find All Components
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path FROM nodes WHERE kind='Function' AND file_path LIKE '%components%';"
```

### Find All Pages
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path FROM nodes WHERE file_path LIKE '%app/%/page.js';"
```

### Search for Specific Functions
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path, line_start FROM nodes WHERE name LIKE '%Contact%';"
```

### Find Dependencies
```bash
sqlite3 .code-review-graph/graph.db "SELECT * FROM edges WHERE source_id IN (SELECT id FROM nodes WHERE name='ContactPage');"
```

### Full-Text Search
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, file_path FROM nodes_fts WHERE nodes_fts MATCH 'search_term';"
```

### List All Functions in a File
```bash
sqlite3 .code-review-graph/graph.db "SELECT name, line_start, params FROM nodes WHERE file_path LIKE '%specific-file.js%' AND kind='Function';"
```

### Find Files by Pattern
```bash
sqlite3 .code-review-graph/graph.db "SELECT DISTINCT file_path FROM nodes WHERE file_path LIKE '%pattern%';"
```

### Count Entities by Type
```bash
sqlite3 .code-review-graph/graph.db "SELECT kind, COUNT(*) as count FROM nodes GROUP BY kind;"
```

## Benefits

1. **Token Efficiency**: Query specific information without loading entire files
2. **Fast Lookups**: SQL queries are faster than grep searches
3. **Structured Data**: Access parsed code structure, not raw text
4. **Relationships**: Understand dependencies between components
5. **Metadata**: Access function signatures, parameters, line numbers

## Maintenance

- Run `code-review-graph build` after significant code changes
- Run `code-review-graph update` for incremental updates
- The database is gitignored and should be rebuilt per environment

## Integration with Kiro

When Kiro needs to:
- Find components or functions → Use SQL queries instead of grep
- Understand code structure → Query nodes table
- Find dependencies → Query edges table
- Search code → Use nodes_fts full-text search

This approach minimizes token usage and provides more accurate results.
