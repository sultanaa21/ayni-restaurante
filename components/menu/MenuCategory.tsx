import React from 'react';
import { MenuCategory as MenuCategoryType } from '@/data/menuData';
import { MenuItem } from './MenuItem';

interface MenuCategoryProps {
    category: MenuCategoryType;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
    return (
        <div className="w-full mb-16 animate-fade-in break-inside-avoid">
            <div className="text-center mb-10">
                <h3 className="font-heading text-4xl text-gold inline-block relative px-8 py-2">
                    {category.title}
                    {/* Decorative lines around title if needed, similar to image */}
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                {category.items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
