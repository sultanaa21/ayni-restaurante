'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSelector } from '../ui/LanguageSelector';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.menu, href: '/carta' },
        { name: t.nav.contact, href: '/contacto' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border py-2 md:py-4' : 'bg-transparent py-4 md:py-6'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                {/* LOGO */}
                <Link href="/" className="group" onClick={closeMenu}>
                    <div className="flex flex-col items-start md:items-center leading-none">
                        <span className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors">
                            AYNI
                        </span>
                        <span className="text-[0.5rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-muted group-hover:text-text transition-colors hidden sm:block">
                            Cuina Peruana
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm uppercase tracking-widest hover:text-gold transition-colors ${pathname === link.href ? 'text-gold border-b border-gold' : 'text-text'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <LanguageSelector />
                    <Button
                        href={siteConfig.contact.whatsapp}
                        variant="secondary"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.nav.book}
                    </Button>
                </div>

                {/* MOBILE TOGGLE */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSelector />
                    <button
                        className="text-gold focus:outline-none p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transform transition-transform origin-left ${isOpen ? 'rotate-45' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-full h-0.5 bg-current transform transition-transform origin-left ${isOpen ? '-rotate-45' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* MOBILE DRAWER */}
                <div
                    className={`fixed inset-0 bg-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{ top: '0', height: '100vh' }}
                >
                    <button
                        onClick={closeMenu}
                        className="absolute top-4 right-4 text-gold p-4"
                    >
                        ✕
                    </button>

                    <div className="flex flex-col items-center gap-6 w-full px-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="font-heading text-3xl text-text hover:text-gold transition-colors py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="w-12 h-[1px] bg-gold/50 my-2" />

                    <div className="w-full px-8">
                        <Button
                            href={siteConfig.contact.whatsapp}
                            variant="primary"
                            size="lg"
                            onClick={closeMenu}
                            className="w-full"
                        >
                            {t.nav.bookTable}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
