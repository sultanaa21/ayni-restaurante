import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { MenuCategory } from '@/components/menu/MenuCategory';
import { menuData } from '@/data/menuData';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export default function CartaPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24">
                {/* Header */}
                <section className="text-center py-12 md:py-20 relative">
                    <div className="container mx-auto px-4">
                        <h1 className="font-heading text-6xl md:text-7xl text-gold mb-4">
                            Nuestra Carta
                        </h1>
                        <div className="separator-ornament opacity-60 max-w-xs mx-auto mb-6">
                            <span>✦</span>
                        </div>
                        <p className="text-muted max-w-2xl mx-auto italic">
                            Un viaje por los sabores del Perú con ingredientes locales de primera calidad.
                        </p>
                    </div>
                </section>

                {/* Menu Content */}
                <Section className="bg-transparent pt-0 pb-32">
                    {menuData.map((category) => (
                        <MenuCategory key={category.id} category={category} />
                    ))}

                    <div className="text-center mt-20 p-8 border border-white/5 bg-surface/30 rounded-lg max-w-2xl mx-auto">
                        <p className="text-muted mb-6 text-sm">
                            * Precios con IVA incluido. Informe a nuestro personal sobre cualquier alergia o intolerancia alimentaria.
                        </p>
                        <div className="flex justify-center flex-wrap gap-4">
                            {/* PDF Placeholder */}
                            <Button variant="ghost" className="text-sm">
                                Descargar Carta (PDF)
                            </Button>
                            <Button href={siteConfig.contact.whatsapp} target="_blank">
                                Reservar Mesa
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
