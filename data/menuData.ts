export interface MenuItem {
    id: string;
    name: string;
    description: string;
    descriptionEn?: string;
    price: number;
    isNew?: boolean;
    allergens?: string[];
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        id: "tiradito",
        title: "Tiradito",
        items: [
            {
                id: "14",
                name: "Tiradito al Ají Amarillo",
                description: "Corte sashimi con aguacate braseado y gambas rebozadas.",
                descriptionEn: "Sashimi cut with grilled avocado and battered prawns.",
                price: 20
            },
            {
                id: "15",
                name: "Tiradito verde Tataki de Atún",
                description: "Leche de tigre de cilantro y sésamo con chips de banano.",
                descriptionEn: "Coriander and sesame tiger's milk with banana chips.",
                price: 18
            }
        ]
    },
    {
        id: "causa",
        title: "Por la Causa",
        items: [
            {
                id: "16",
                name: "Causa Limeña",
                description: "Masa de patata, ensaladilla de pollo, aguacate, huevo de codorniz y tomate cherry.",
                descriptionEn: "Potato dough, chicken salad, avocado, quail egg, and cherry tomato.",
                price: 14
            },
            {
                id: "17",
                name: "Causa de Pulpo al Olivo",
                description: "Pulpo sopleteado en salsa de olivas botija y chimichurri.",
                descriptionEn: "Torched octopus in botija olive sauce and chimichurri.",
                price: 18
            },
            {
                id: "18",
                name: "Causa Cóctel de Gamba",
                description: "Gambas al punto en salsa golf con pisco peruano.",
                descriptionEn: "Perfectly cooked prawns in golf sauce with Peruvian pisco.",
                price: 16
            },
            {
                id: "19",
                name: "Causa Veggie",
                description: "Pimiento piquillo, tomate cherry, maíz, boniato y aguacate.",
                descriptionEn: "Piquillo pepper, cherry tomato, corn, sweet potato, and avocado.",
                price: 12
            }
        ]
    },
    {
        id: "ensaladas",
        title: "Ensaladas",
        items: [
            {
                id: "20",
                name: "Ensalada de Quinua",
                description: "Zanahoria, tomate cherry, rúcula, aguacate, espárrago, cortes láminas de salmón y aliño de maracuyá.",
                descriptionEn: "Carrot, cherry tomato, arugula, avocado, asparagus, thinly sliced salmon, and passion fruit dressing.",
                price: 14
            },
            {
                id: "21",
                name: "Ensalada del cholo César",
                description: "Lechuga cogollo, tomate cherry, queso grana padano, pollo mechado, salsa acevichada con anchoas.",
                descriptionEn: "Baby lettuce, cherry tomato, Grana Padano cheese, shredded chicken, and ceviche-style sauce with anchovies.",
                price: 14
            }
        ]
    },
    {
        id: "peces",
        title: "Peces",
        items: [
            {
                id: "22",
                name: "Salmón a lo macho",
                description: "Salsa de mariscos cremoso, arroz y puré de patata.",
                descriptionEn: "Creamy seafood sauce, rice, and mashed potatoes.",
                price: 19
            },
            {
                id: "23",
                name: "Ceviche caliente",
                description: "Filete de corvina, leche de tigre amarillo y katsuobushi.",
                descriptionEn: "Corvina fillet, yellow tiger's milk, and katsuobushi.",
                price: 20
            },
            {
                id: "24",
                name: "Lubina al ajillo",
                description: "Yucas fritas, arroz, salsa criolla, emulsión de ajo y ají amarillo.",
                descriptionEn: "Fried yucca, rice, criolla sauce, garlic and yellow chili pepper emulsion.",
                price: 18
            }
        ]
    }
];
