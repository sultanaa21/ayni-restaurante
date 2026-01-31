import React from 'react';
import { Separator } from './Separator';

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    noSeparator?: boolean;
}

export const Section: React.FC<SectionProps> = ({
    id,
    title,
    subtitle,
    children,
    className = '',
    containerClassName = '',
    noSeparator = false,
}) => {
    return (
        <section id={id} className={`py-16 md:py-24 relative ${className}`}>
            <div className={`container mx-auto ${containerClassName}`}>
                {(title || subtitle) && (
                    <div className="text-center mb-12 animate-fade-in">
                        {title && (
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gold mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-muted text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                        {!noSeparator && <Separator className="mt-6 opacity-60" />}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};
