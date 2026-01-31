import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';

interface MenuItemProps {
    item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <div className="group mb-8 w-full">
            <div className="flex items-baseline justify-between mb-2 w-full relative">
                <h4 className="text-xl md:text-2xl font-bold text-gold-light pr-4 bg-bg relative z-10 shrink-0 max-w-[80%]">
                    {item.id}. {item.name}
                </h4>

                {/* Dotted Leader */}
                <div className="absolute left-0 right-0 bottom-2 border-b-2 border-dotted border-gold/30 z-0"></div>

                <span className="text-xl font-bold text-text pl-4 bg-bg relative z-10 shrink-0">
                    {item.price !== null
                        ? `${item.price.toFixed(2).replace('.', ',')} €`
                        : 'Consultar'
                    }
                </span>
            </div>

            <div className="space-y-1 pl-1">
                <p className="text-base text-text/90 font-medium">
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
