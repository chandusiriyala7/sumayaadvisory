'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import { profile } from '@/data/profile'
import { services } from '@/data/services'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        serviceInterest: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real implementation, this would send the form data to a backend
        console.log('Form submitted:', formData)
        alert('Thank you for your interest! Dr. Sumaya will contact you shortly.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
            serviceInterest: '',
            message: ''
        })
    }

    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Get In Touch"
                        subtitle="Let's discuss how we can help your institution achieve excellence"
                    />
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            <Card>
                                <h3 className="text-xl font-serif font-semibold text-academic-blue-950 mb-4">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-academic-blue-800 mb-2">
                                            Phone
                                        </h4>
                                        <a
                                            href={`tel:${profile.contact.phone}`}
                                            className="text-gray-700 hover:text-academic-blue-700 block"
                                        >
                                            {profile.contact.phone}
                                        </a>
                                        <a
                                            href={`tel:${profile.contact.landline}`}
                                            className="text-gray-700 hover:text-academic-blue-700 block"
                                        >
                                            {profile.contact.landline}
                                        </a>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-academic-blue-800 mb-2">
                                            Email
                                        </h4>
                                        <a
                                            href={`mailto:${profile.contact.email}`}
                                            className="text-gray-700 hover:text-academic-blue-700"
                                        >
                                            {profile.contact.email}
                                        </a>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-academic-blue-800 mb-2">
                                            Address
                                        </h4>
                                        <address className="text-gray-700 not-italic text-sm">
                                            {profile.contact.address.line1}<br />
                                            {profile.contact.address.line2}<br />
                                            {profile.contact.address.line3}
                                        </address>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-gradient-to-br from-academic-blue-50 to-white">
                                <h4 className="text-lg font-semibold text-academic-blue-950 mb-3">
                                    Response Time
                                </h4>
                                <p className="text-sm text-gray-600">
                                    We typically respond to consultation requests within 24-48 hours.
                                    For urgent matters, please call directly.
                                </p>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-6">
                                    Request a Consultation
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue-500 focus:border-transparent"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue-500 focus:border-transparent"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue-500 focus:border-transparent"
                                                placeholder="+91-XXXXXXXXXX"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="organization"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Organization/Institution
                                            </label>
                                            <input
                                                type="text"
                                                id="organization"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue-500 focus:border-transparent"
                                                placeholder="Your institution name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="serviceInterest"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Service of Interest
                                        </label>
                                        <select
                                            id="serviceInterest"
                                            name="serviceInterest"
                                            value={formData.serviceInterest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select a service...</option>
                                            {services.map((service) => (
                                                <option key={service.id} value={service.title}>
                                                    {service.title}
                                                </option>
                                            ))}
                                            <option value="other">Other / General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue-500 focus:border-transparent"
                                            placeholder="Please describe your requirements, challenges, or questions..."
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn-primary w-full md:w-auto"
                                        >
                                            Send Consultation Request
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        * Required fields. Your information will be kept confidential and used only
                                        to respond to your inquiry.
                                    </p>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Options */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Prefer Direct Contact?"
                        subtitle="Choose your preferred method of communication"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <a
                            href={`tel:${profile.contact.phone}`}
                            className="card text-center hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl mb-3">📞</div>
                            <h4 className="text-lg font-semibold text-academic-blue-900 mb-2">
                                Call Now
                            </h4>
                            <p className="text-sm text-gray-600">
                                {profile.contact.phone}
                            </p>
                        </a>

                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="card text-center hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl mb-3">✉️</div>
                            <h4 className="text-lg font-semibold text-academic-blue-900 mb-2">
                                Email Us
                            </h4>
                            <p className="text-sm text-gray-600">
                                {profile.contact.email}
                            </p>
                        </a>

                        <a
                            href={`https://wa.me/${profile.contact.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card text-center hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl mb-3">💬</div>
                            <h4 className="text-lg font-semibold text-academic-blue-900 mb-2">
                                WhatsApp
                            </h4>
                            <p className="text-sm text-gray-600">
                                Quick message
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
