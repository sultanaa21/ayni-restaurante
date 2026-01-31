import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    fullWidth?: boolean;
    target?: string;
    rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm cursor-pointer uppercase tracking-wider";

    const variants = {
        primary: "bg-gold text-bg hover:bg-gold-light hover:shadow-[0_0_15px_rgba(200,162,90,0.4)]",
        secondary: "bg-transparent border border-gold text-gold hover:bg-gold/10 hover:shadow-[0_0_10px_rgba(200,162,90,0.2)]",
        ghost: "bg-transparent text-gold hover:text-gold-light underline-offset-4 hover:underline",
    };

    const sizes = {
        sm: "text-xs px-4 py-2",
        md: "text-sm px-6 py-3",
        lg: "text-base px-8 py-4",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

    if (href) {
        return (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Link href={href} className={combinedClassName} {...(props as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
