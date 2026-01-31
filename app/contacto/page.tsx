'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { ContactForm } from '@/components/contact/ContactForm';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactoPage() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24">
                <section className="text-center py-12 md:py-16">
                    <h1 className="font-heading text-5xl md:text-7xl text-gold mb-6">{t.contact.title}</h1>
                    <p className="text-muted max-w-xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </section>

                <Section className="pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="font-heading text-3xl text-gold mb-6">{t.contact.reservationsTitle}</h3>
                                <p className="text-muted mb-6">
                                    {t.contact.reservationsText}
                                </p>
                                <Button
                                    href={siteConfig.contact.whatsapp}
                                    variant="primary"
                                    size="lg"
                                    className="w-full md:w-auto"
                                    target="_blank"
                                >
                                    {t.contact.whatsappBtn}: {siteConfig.contact.whatsappDisplay}
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="bg-surface p-6 border border-white/5 rounded-sm">
                                    <h4 className="text-gold font-bold mb-3 uppercase tracking-wider text-sm">{t.contact.phoneLabel}</h4>
                                    <a href={`tel:+34${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-text hover:text-gold transition-colors">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>

                                <div className="bg-surface p-6 border border-white/5 rounded-sm">
                                    <h4 className="text-gold font-bold mb-3 uppercase tracking-wider text-sm">{t.contact.emailLabel}</h4>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-text hover:text-gold transition-colors">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="bg-surface p-6 border border-white/5 rounded-sm">
                                <h4 className="text-gold font-bold mb-3 uppercase tracking-wider text-sm">{t.contact.scheduleLabel}</h4>
                                <ul className="text-sm space-y-2">
                                    {siteConfig.hours.map((h, i) => (
                                        <li key={i} className="flex justify-between">
                                            <span className="text-white">
                                                {/* Hardcoded everyday label mapping again */}
                                                {t.footer.days.everyday}
                                            </span>
                                            <span className="text-muted">{h.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form Placeholder */}
                        <ContactForm />

                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
