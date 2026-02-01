'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';

export default function CookiesPage() {
    const { language } = useLanguage();

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 font-sans text-text">
                <Section className="py-12 md:py-16">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h1 className="font-heading text-4xl md:text-5xl text-gold mb-8">Política de Cookies</h1>

                        {language === 'en' && (
                            <div className="bg-surface/50 border border-gold/20 p-4 rounded-sm mb-8 text-sm text-muted italic">
                                Note: This legal content is available in Spanish to comply with local regulations.
                            </div>
                        )}

                        <div className="space-y-6 text-text/80 leading-relaxed">
                            <section>
                                <h2 className="text-xl text-gold mb-3">¿Qué son las cookies?</h2>
                                <p>
                                    Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">Tipos de cookies utilizadas</h2>
                                <p>
                                    <strong>Este sitio web no utiliza cookies de análisis ni cookies publicitarias.</strong>
                                </p>
                                <p className="mt-4">
                                    Utilizamos únicamente <strong>cookies técnicas</strong> que son estrictamente necesarias para el funcionamiento del sitio web y la utilización de las diferentes opciones y servicios que en ella existen.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2 text-muted">
                                    <li>
                                        <strong>Cookies de sesión y preferencias:</strong> Permiten recordar sus preferencias de idioma y gestión del consentimiento de cookies.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">Gestión de cookies</h2>
                                <p>
                                    Al no utilizar cookies de terceros ni de seguimiento, no es necesario un panel de configuración complejo. No obstante, usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                                </p>
                            </section>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
