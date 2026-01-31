import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true
}) => {
    return (
        <div
            className={`
        bg-surface border border-border rounded-sm p-6
        transition-all duration-300
        ${hoverEffect ? 'hover:border-gold hover:shadow-[0_0_20px_rgba(200,162,90,0.1)] hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
