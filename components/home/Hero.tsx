'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Decorative Border Frame - Top Corners */}
            <div className="absolute top-24 left-4 w-16 h-16 border-t-2 border-l-2 border-gold/50 rounded-tl-lg hidden md:block"></div>
            <div className="absolute top-24 right-4 w-16 h-16 border-t-2 border-r-2 border-gold/50 rounded-tr-lg hidden md:block"></div>

            {/* Decorative Border Frame - Bottom Corners */}
            <div className="absolute bottom-12 left-4 w-16 h-16 border-b-2 border-l-2 border-gold/50 rounded-bl-lg hidden md:block"></div>
            <div className="absolute bottom-12 right-4 w-16 h-16 border-b-2 border-r-2 border-gold/50 rounded-br-lg hidden md:block"></div>

            <div className="animate-fade-in space-y-8 max-w-4xl mx-auto z-10 p-8 md:p-16 border border-gold/10 bg-bg/30 backdrop-blur-sm rounded-lg">
                {/* Logo Container with Greek Key pattern top/bottom via CSS classes in globals */}
                <div className="py-8 border-t border-b border-double border-gold/30">
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-gold tracking-widest mb-4">
                        AYNI
                    </h1>
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gold-light/80">
                        {t.hero.subtitle}
                    </p>
                </div>

                <p className="text-lg md:text-xl text-text/80 font-light max-w-2xl mx-auto leading-relaxed italic">
                    &quot;{t.hero.description}&quot;
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <Button
                        href={siteConfig.contact.whatsapp}
                        variant="primary"
                        size="lg"
                        target="_blank"
                        className="min-w-[200px]"
                    >
                        {t.hero.bookTable}
                    </Button>
                    <Button
                        href="/carta"
                        variant="secondary"
                        size="lg"
                        className="min-w-[200px]"
                    >
                        {t.hero.viewMenu}
                    </Button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <span className="text-gold text-2xl">↓</span>
            </div>
        </div>
    );
};
