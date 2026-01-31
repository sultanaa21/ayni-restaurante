'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="bg-bg border-t border-border pt-16 pb-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    {/* Column 1: Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-heading text-3xl text-gold mb-4">AYNI</h3>
                        <p className="text-muted text-sm max-w-xs mb-6">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                                Instagram
                            </a>
                            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                                TikTok
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Hours */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading text-xl text-text mb-6">{t.footer.schedule}</h4>
                        <ul className="space-y-2 text-muted text-sm">
                            {siteConfig.hours.map((item, idx) => (
                                <li key={idx}>
                                    <span className="block text-gold-light mb-1">
                                        {/* Assuming the first item is the daily schedule, effectively hardcoding the translation mapping logic for now based on user instruction to use 'everyday' label */}
                                        {t.footer.days.everyday}
                                    </span>
                                    <span>{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading text-xl text-text mb-6">{t.footer.contact}</h4>
                        <address className="not-italic space-y-4 text-muted text-sm flex flex-col items-center md:items-start">
                            <p>{siteConfig.contact.address}</p>
                            <a href={`tel:+34${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                                {siteConfig.contact.phone}
                            </a>
                            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors">
                                {siteConfig.contact.email}
                            </a>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted/50">
                    <p>© {currentYear} {siteConfig.name}. {t.footer.rights}</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-muted transition-colors">{t.footer.privacy}</Link>
                        <Link href="#" className="hover:text-muted transition-colors">{t.footer.cookies}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
