import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import Link from 'next/link';

export const FeaturedDishes = () => {
    // Subset of menu items for display
    const highlightedItems = [
        { title: "Tiradito al Ají Amarillo", desc: "Corte sashimi con aguacate braseado y gambas rebozadas.", price: "20€" },
        { title: "Causa Limeña", desc: "Masa de patata, ensaladilla de pollo, aguacate y huevo de codorniz.", price: "14€" },
        { title: "Ceviche Caliente", desc: "Filete de corvina, leche de tigre amarillo y katsuobushi.", price: "20€" },
        { title: "Salmón a lo Macho", desc: "Salsa de mariscos cremoso, arroz y puré de patata.", price: "19€" },
        { title: "Causa de Pulpo", desc: "Pulpo sopleteado en salsa de olivas botija y chimichurri.", price: "18€" },
        { title: "Lubina al Ajillo", desc: "Yucas fritas, arroz, salsa criolla, emulsión de ajo.", price: "18€" }
    ];

    return (
        <Section title="Platos Destacados" subtitle="Una selección de nuestros sabores más representativos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlightedItems.map((item, index) => (
                    <Card key={index} className="h-full flex flex-col group">
                        {/* Placeholder Image Gradient */}
                        <div className="h-48 w-full bg-gradient-to-br from-surface to-[#1a202c] mb-4 rounded-sm border border-gold/10 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="text-gold/20 font-heading text-4xl">AYNI</span>
                        </div>

                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-heading text-xl text-gold">{item.title}</h3>
                            <span className="text-gold-light font-bold">{item.price}</span>
                        </div>

                        <p className="text-muted text-sm flex-grow">
                            {item.desc}
                        </p>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link
                    href="/carta"
                    className="inline-block border-b border-gold text-gold hover:text-white transition-colors pb-1 uppercase tracking-widest text-sm"
                >
                    Ver Carta Completa →
                </Link>
            </div>
        </Section>
    );
};
