'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Use setTimeout to avoid synchronous state update warning
            const timer = setTimeout(() => setIsVisible(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-gold/20 p-4 md:p-6 z-50 animate-fade-in shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-text/90 text-sm text-center md:text-left">
                    Este sitio web utiliza únicamente cookies técnicas necesarias para su correcto funcionamiento.
                </p>
                <Button
                    onClick={acceptCookies}
                    variant="primary"
                    size="sm"
                    className="whitespace-nowrap w-full md:w-auto"
                >
                    Aceptar
                </Button>
            </div>
        </div>
    );
};
