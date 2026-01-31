'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 text-sm font-medium tracking-widest text-text/80">
            <button
                onClick={() => setLanguage('es')}
                className={`hover:text-gold transition-colors ${language === 'es' ? 'text-gold' : 'text-text/50'}`}
                aria-label="Cambiar a Español"
            >
                ES
            </button>
            <span className="text-text/30">|</span>
            <button
                onClick={() => setLanguage('en')}
                className={`hover:text-gold transition-colors ${language === 'en' ? 'text-gold' : 'text-text/50'}`}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
};
