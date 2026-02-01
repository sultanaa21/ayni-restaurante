import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';

interface MenuItemProps {
    item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <div className="group mb-8 w-full">
            {/* Flex container that wraps on small screens if content is too wide */}
            <div className="flex flex-wrap items-baseline justify-between mb-2 w-full relative">
                <h4 className="text-lg md:text-2xl font-bold text-gold-light pr-2 bg-bg relative z-10 shrink-0">
                    {item.id}. {item.name}
                </h4>

                {/* Dotted Leader - Hidden on very small screens if wrapping occurs, or controlled via media query */}
                {/* Simplified: Hide on mobile to avoid "cortes raros", show on md+ */}
                <div className="hidden md:block absolute left-0 right-0 bottom-2 border-b-2 border-dotted border-gold/30 z-0"></div>

                <span className="text-lg md:text-xl font-bold text-text pl-2 bg-bg relative z-10 shrink-0 ml-auto">
                    {item.price !== null
                        ? `${item.price.toFixed(2).replace('.', ',')} €`
                        : 'Consultar'
                    }
                </span>
            </div>

            <div className="space-y-1 pl-1">
                <p className="text-base text-text/90 font-medium leading-relaxed">
                    {item.description}
                </p>

                {item.descriptionEn && (
                    <p className="text-sm text-muted italic font-light">
                        {item.descriptionEn}
                    </p>
                )}
            </div>
        </div>
    );
};
