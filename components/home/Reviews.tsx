import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export const Reviews = () => {
    const reviews = [
        {
            name: "Marc G.",
            initial: "M",
            text: "Una experiencia increíble. Los sabores son auténticos y la presentación es impecable. El tiradito es obligatorio.",
            stars: 5,
        },
        {
            name: "Laura S.",
            initial: "L",
            text: "El mejor restaurante peruano de la zona. El ambiente es íntimo y elegante, perfecto para una cena en pareja.",
            stars: 5,
        },
        {
            name: "Jordi V.",
            initial: "J",
            text: "Servicio excelente y comida de 10. La causa limeña me transportó directamente a Perú.",
            stars: 5,
        }
    ];

    return (
        <Section title="Lo que dicen de nosotros" className="bg-surface/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, idx) => (
                    <Card key={idx} className="text-center border-gold/10">
                        <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-heading text-xl mx-auto mb-4">
                            {review.initial}
                        </div>

                        <div className="flex justify-center gap-1 mb-4 text-gold">
                            {[...Array(review.stars)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>

                        <p className="text-muted italic mb-6 text-sm leading-relaxed">
                            "{review.text}"
                        </p>

                        <h4 className="text-text font-medium text-sm">
                            {review.name}
                        </h4>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
