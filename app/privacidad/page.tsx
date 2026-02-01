'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPage() {
    const { language } = useLanguage();

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 font-sans text-text">
                <Section className="py-12 md:py-16">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h1 className="font-heading text-4xl md:text-5xl text-gold mb-8">Política de Privacidad</h1>

                        {language === 'en' && (
                            <div className="bg-surface/50 border border-gold/20 p-4 rounded-sm mb-8 text-sm text-muted italic">
                                Note: This legal content is available in Spanish to comply with local regulations.
                            </div>
                        )}

                        <div className="space-y-6 text-text/80 leading-relaxed">
                            <section>
                                <h2 className="text-xl text-gold mb-3">1. Responsable del Tratamiento</h2>
                                <p>
                                    <strong>Identidad:</strong> AYNI – Cuina Peruana<br />
                                    <strong>Dirección:</strong> Av. del Cavall Bernat, 96, 17250 Platja d&apos;Aro, Girona<br />
                                    <strong>Email:</strong> (Consultar a través del formulario de contacto)
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">2. Finalidad del Tratamiento</h2>
                                <p>
                                    Tratamos la información que nos facilita con el fin de responder a las consultas enviadas a través de nuestro formulario de contacto o medios facilitados, así como gestionar las reservas solicitadas.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">3. Legitimación</h2>
                                <p>
                                    La base legal para el tratamiento de sus datos es el consentimiento del usuario al enviar el formulario de contacto o solicitar una reserva.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">4. Conservación de los Datos</h2>
                                <p>
                                    Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">5. Cesión de Datos</h2>
                                <p>
                                    Los datos no se cederán a terceros, salvo en los casos en que exista una obligación legal.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-gold mb-3">6. Derechos del Usuario</h2>
                                <p>
                                    Usted tiene derecho a obtener confirmación sobre si en AYNI estamos tratando sus datos personales. Por tanto, tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.
                                </p>
                                <p className="mt-2">
                                    Puede ejercer sus derechos enviando una solicitud a la dirección indicada en el apartado de Responsable.
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
