export interface MenuItem {
    id: string;
    name: string;
    description: string;
    descriptionEn?: string;
    price: number | null; // Allow null for desserts
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
        id: "entrantes",
        title: "Entrantes / Para Compartir",
        items: [
            {
                id: "1",
                name: "Anticuchos (2 Unidades)",
                description: "Brochetas peruanas marinadas en ajies peruanos.",
                descriptionEn: "Peruvian skewers marinated in peruvian chili peppers.",
                price: 16
            },
            {
                id: "2",
                name: "Jalea Mixta",
                description: "Frituras varias de mar, langostino, pez y calamar.",
                descriptionEn: "Assorted fried seafood: shrimp, fish, and squid.",
                price: 18
            },
            {
                id: "3",
                name: "Yuquitas",
                description: "Yucas crocantes acompañadas con salsa huancaína y mayonesa anticuchera.",
                descriptionEn: "Crispy yucca served with huancaína sauce and anticuchera mayonnaise.",
                price: 9
            },
            {
                id: "4",
                name: "Alitas Chiferas (6 Unidades)",
                description: "Alitas en salsa oriental, con crocantes de yuca y nabo encurtido.",
                descriptionEn: "Oriental sauce wings with crispy yucca and pickled radish.",
                price: 12
            },
            {
                id: "5",
                name: "Patata A La Huancaína",
                description: "Rodajas de patata con salsa huancaína, aceituna botija y huevo de codorniz.",
                descriptionEn: "Potato slices with huancaína sauce, botija olives, and quail egg.",
                price: 10
            },
            {
                id: "6",
                name: "Tamal De Cerdo",
                description: "Tamal acompañado de tostaditas y salsa criolla al punto.",
                descriptionEn: "Tamale served with crispy bread toasts and perfectly seasoned criolla sauce.",
                price: 8
            }
        ]
    },
    {
        id: "ceviches",
        title: "Ceviches",
        items: [
            {
                id: "7",
                name: "Leche De Tigre",
                description: "Con chips de boniato y crocante de calamar.",
                descriptionEn: "With sweet potato chips and crispy calamari.",
                price: 15
            },
            {
                id: "8",
                name: "Ceviche Clásico Limeño",
                description: "Pez, boniato y choclo con leche de tigre.",
                descriptionEn: "Fish, sweet potato, and corn with tiger's milk.",
                price: 21
            },
            {
                id: "9",
                name: "Ceviche Mixto Limeño",
                description: "Pez, pulpo, gambas y zamburiña con leche de tigre.",
                descriptionEn: "Fish, octopus, prawns, and scallops with tiger's milk.",
                price: 23
            },
            {
                id: "10",
                name: "Ceviche Norteño",
                description: "A base de puro limón, con pulpo, zarandaja, yuca y choclo.",
                descriptionEn: "Made with pure lime juice, with octopus, zarandaja, cassava, and corn.",
                price: 22
            },
            {
                id: "11",
                name: "Ceviche Gold",
                description: "Salmón y gambas en leche de tigre de ají amarillo cremoso, patacones y cebolla frita.",
                descriptionEn: "Salmon and prawns in creamy yellow chili tiger's milk, fried plantains, and crispy onions.",
                price: 23
            },
            {
                id: "12",
                name: "Ceviche Furioso",
                description: "Pez blanco y calamar, con leche de tigre a base de rocoto y ají limo, con chulpi y boniato glaseado.",
                descriptionEn: "White fish and squid, with rocoto and limo chili tiger's milk, chulpi corn, and glazed sweet potato.",
                price: 22
            },
            {
                id: "13",
                name: "Ceviche Nikkei Maracuyá",
                description: "Atún, leche de tigre con maracuyá, nori y kiuri.",
                descriptionEn: "Tuna, passion fruit tiger's milk, nori, and kiuri.",
                price: 23
            }
        ]
    },
    {
        id: "tiradito",
        title: "Tiradito",
        items: [
            {
                id: "14",
                name: "Tiradito Al Ají Amarillo",
                description: "Corte sashimi con aguacate braseado y gambas rebozadas",
                descriptionEn: "Sashimi cut with grilled avocado and battered prawns",
                price: 20
            },
            {
                id: "15",
                name: "Tiradito Verde Tataki De Atún",
                description: "Leche de tigre de cilantro y sésamo con chips de banano",
                descriptionEn: "Coriander and sesame tiger's milk with banana chips",
                price: 18
            }
        ]
    },
    {
        id: "ensaladas",
        title: "Ensaladas",
        items: [
            {
                id: "16",
                name: "Ensalada De Quinua",
                description: "Zanahoria, tomate cherry, rúcula, aguacate, espárrago, cortes laminas de salmón y aliño de maracuyá",
                descriptionEn: "Carrot, cherry tomato, arugula, avocado, asparagus, thinly sliced salmon, and passion fruit dressing",
                price: 14
            },
            {
                id: "17",
                name: "Ensalada Del Cholo César",
                description: "Lechuga cogollo, tomate cherry, queso grana padano, pollo mechado, salsa acevichada con anchoas",
                descriptionEn: "Baby lettuce, cherry tomato, grana padano cheese, shredded chicken, and ceviche-style sauce with anchovies",
                price: 14
            }
        ]
    },
    {
        id: "causa",
        title: "Por La Causa",
        items: [
            {
                id: "18",
                name: "Causa Limeña",
                description: "Masa de patata, ensaladilla de pollo, aguacate, huevo de codorniz y tomate cherry",
                descriptionEn: "Potato dough, chicken salad, avocado, quail egg, and cherry tomato",
                price: 14
            },
            {
                id: "19",
                name: "Causa De Pulpo Al Olivo",
                description: "Pulpo sopleteado en salsa de olivas botija y chimichurri",
                descriptionEn: "Torched octopus in botija olive sauce and chimichurri",
                price: 18
            },
            {
                id: "20",
                name: "Causa Cóctel De Gamba",
                description: "Gambas al punto en salsa golf con pisco peruano",
                descriptionEn: "Perfectly cooked prawns in golf sauce with peruvian pisco",
                price: 16
            },
            {
                id: "21",
                name: "Causa Veggie",
                description: "Pimiento piquillo, tomate cherry, maíz, boniato y aguacate",
                descriptionEn: "Piquillo pepper, cherry tomato, corn, sweet potato, and avocado",
                price: 12
            }
        ]
    },
    {
        id: "peces",
        title: "Peces",
        items: [
            {
                id: "22",
                name: "Salmón A Lo Macho",
                description: "Salsa de mariscos cremoso, arroz y puré de patata",
                descriptionEn: "Creamy seafood sauce, rice, and mashed potatoes",
                price: 19
            },
            {
                id: "23",
                name: "Ceviche Caliente",
                description: "Filete de corvina, leche de tigre amarillo y katsuobushi",
                descriptionEn: "Corvina fillet, yellow tiger's milk, and katsuobushi",
                price: 20
            },
            {
                id: "24",
                name: "Lubina Al Ajillo",
                description: "Yucas fritas, arroz, salsa criolla, emulsión de ajo y aji amarillo",
                descriptionEn: "Fried yucca, rice, criolla sauce, garlic and yellow chili pepper emulsion",
                price: 18
            }
        ]
    },
    {
        id: "criollos",
        title: "Criollos",
        items: [
            {
                id: "25",
                name: "Ají De Gallina",
                description: "Guiso en base de ajíes, parmesano, nueces y arroz.",
                descriptionEn: "Stew with chill base, parmesan, walnuts, and rice.",
                price: 16
            },
            {
                id: "26",
                name: "Costilla De Vaca",
                description: "Guiso con cilantro de larga cocción, puré de maíz, salsa criolla y arroz.",
                descriptionEn: "Slow-cooked cilantro stew, corn purée, criolla sauce, and rice.",
                price: 18
            },
            {
                id: "27",
                name: "Lomo Saltado Tradicional",
                description: "Lomo al fuego vivo bien ahumado con patatas fritas y arroz.",
                descriptionEn: "Fire-grilled, well-smoked tenderloin with fries and rice.",
                price: 20
            },
            {
                id: "28",
                name: "Lomo Saltado Con Tacu Tacu",
                description: "Lomo al fuego vivo bien ahumado con atamalado de arroz y fréjol.",
                descriptionEn: "Fire-grilled, well-smoked tenderloin with rice and bean tamale.",
                price: 20
            },
            {
                id: "29",
                name: "Lomo Saltado Huancaína",
                description: "Lomo al fuego vivo, bien ahumado con fetuccini en salsa huancaína.",
                descriptionEn: "Fire-grilled, well-smoked tenderloin with fettuccine in huancaína sauce.",
                price: 20
            },
            {
                id: "30",
                name: "Meloso De Pato",
                description: "Arroz húmedo con pato, chalaquita, alioli de ají amarillo.",
                descriptionEn: "Moist rice with duck, chalaquita, and yellow chili aioli.",
                price: 22
            },
            {
                id: "31",
                name: "Arroz Con Mariscos",
                description: "Tradicional con gambas, pulpo, mejillones, calamar y salsa criolla.",
                descriptionEn: "Traditional with prawns, octopus, mussels, squid, and criolla sauce.",
                price: 18
            },
            {
                id: "32",
                name: "Arroz Chaufa De Mariscos",
                description: "Al wok y confundente con gambas, mejillones, almeja, calamar y pulpo.",
                descriptionEn: "Stir-fried and hearty with prawns, mussels, clams, squid, and octopus.",
                price: 18
            },
            {
                id: "33",
                name: "Arroz Chaufa Cantón",
                description: "", // Missing description in source
                descriptionEn: "",
                price: 16
            },
            {
                id: "34",
                name: "Arroz Chaufa De Pollo",
                description: "Al wok y contundente tradicional.",
                descriptionEn: "Stir-fried and hearty traditional",
                price: 16
            },
            {
                id: "35",
                name: "Arroz Chaufa Vegetariano",
                description: "Al wok y contundente con champiñones, tomate cherry, pimiento, brotes y calabazin.",
                descriptionEn: "Stir-fried and hearty with mushrooms, cherry tomato, pepper, sprouts, and zucchini.",
                price: 15
            }
        ]
    },
    {
        id: "postres",
        title: "Postres",
        items: [
            {
                id: "36",
                name: "Cinco Leches",
                description: "Merengue italiano.",
                descriptionEn: "Italian meringue.",
                price: null
            },
            {
                id: "37",
                name: "Pie De Limón",
                description: "Limón, galleta de vainilla y merengue italiano.",
                descriptionEn: "Lemon, vanilla cookie and italian meringue.",
                price: null
            },
            {
                id: "38",
                name: "Bizcocho Húmedo De Cacao",
                description: "Manjar de lúcuma y fosh de olla.",
                descriptionEn: "Lucuma and pot fosh delicacy.",
                price: null
            }
        ]
    }
];
