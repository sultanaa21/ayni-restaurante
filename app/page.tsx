import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';
import { Reviews } from '@/components/home/Reviews';
import { LocationSection } from '@/components/home/LocationSection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        <FeaturedDishes />
        <LocationSection />

        <Reviews />
      </main>
      <Footer />
    </>
  );
}
