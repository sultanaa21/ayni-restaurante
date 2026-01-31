'use client';

import React from 'react';
import { Button } from '../ui/Button';

export const ContactForm = () => {
    return (
        <div className="bg-surface p-8 md:p-10 border border-gold/20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

            <h3 className="font-heading text-3xl text-white mb-2">Envíanos un mensaje</h3>
            <p className="text-muted mb-8 text-sm">
                Te responderemos lo antes posible.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold-light">Nombre</label>
                        <input
                            type="text"
                            className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold-light">Teléfono</label>
                        <input
                            type="tel"
                            className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                            placeholder="Tu teléfono"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold-light">Email</label>
                    <input
                        type="email"
                        className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                        placeholder="tu@email.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold-light">Mensaje</label>
                    <textarea
                        rows={4}
                        className="w-full bg-bg border border-white/10 p-3 text-text focus:border-gold focus:outline-none transition-colors rounded-sm"
                        placeholder="¿En qué podemos ayudarte?"
                    />
                </div>

                <Button fullWidth variant="secondary" className="mt-4">
                    Enviar Mensaje
                </Button>

                <p className="text-xs text-center text-muted/50 mt-4">
                    * Este formulario está preparado para futura integración.
                </p>
            </form>
        </div>
    );
};
