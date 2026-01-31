'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export const ContactForm = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-surface p-8 md:p-10 border border-gold/20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

            <h3 className="font-heading text-3xl text-white mb-2">{t.contact.form.send}</h3>
            <p className="text-muted mb-8 text-sm">
                {t.contact.subtitle}
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold-light">{t.contact.form.name}</label>
                        <input
                            type="text"
                            className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                            placeholder={t.contact.form.namePlaceholder}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold-light">{t.contact.phoneLabel}</label>
                        <input
                            type="tel"
                            className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                            placeholder={t.contact.form.phonePlaceholder}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold-light">{t.contact.form.email}</label>
                    <input
                        type="email"
                        className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                        placeholder={t.contact.form.emailPlaceholder}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold-light">{t.contact.form.message}</label>
                    <textarea
                        rows={4}
                        className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                        placeholder={t.contact.form.messagePlaceholder}
                    />
                </div>

                <Button fullWidth variant="secondary" className="mt-4">
                    {t.contact.form.send}
                </Button>

                <p className="text-xs text-center text-muted/50 mt-4">
                    {t.contact.form.disclaimer}
                </p>
            </form>
        </div>
    );
};
