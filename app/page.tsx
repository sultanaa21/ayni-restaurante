import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';
import { Reviews } from '@/components/home/Reviews';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/data/siteConfig';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        <FeaturedDishes />

        {/* Location & Hours Section (Inline) */}
        <Section title="Ubicación y Horario" className="bg-bg relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="bg-surface p-8 border border-gold/20 rounded-sm">
                <h3 className="font-heading text-2xl text-gold mb-6">Horario de Apertura</h3>
                <ul className="space-y-4">
                  {siteConfig.hours.map((item, idx) => (
                    <li key={idx} className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-white font-medium">{item.day}</span>
                      <span className="text-muted">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface p-8 border border-gold/20 rounded-sm">
                <h3 className="font-heading text-2xl text-gold mb-4">¿Dónde estamos?</h3>
                <p className="text-muted mb-4">{siteConfig.contact.address}</p>
                <p className="text-sm text-muted/60">
                  En el corazón de la Costa Brava, un espacio diseñado para el disfrute de los sentidos.
                </p>
              </div>
            </div>

            <div className="h-[400px] w-full rounded-sm overflow-hidden border border-gold/20 order-1 lg:order-2 filter grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src={siteConfig.location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </Section>

        <Reviews />
      </main>
      <Footer />
    </>
  );
}
