export type Language = 'es' | 'en';

export const translations = {
    es: {
        nav: {
            home: "Inicio",
            menu: "Carta",
            contact: "Contacto",
            book: "Reservar",
            bookTable: "Reservar Mesa"
        },
        hero: {
            subtitle: "Cocina Peruana en Platja d'Aro",
            description: "Una experiencia culinaria que fusiona tradición e innovación. Descubre los auténticos sabores de Perú en un ambiente elegante y acogedor.",
            bookTable: "Reservar Mesa",
            viewMenu: "Ver Carta"
        },
        home: {
            featuredTitle: "Platos Destacados",
            featuredSubtitle: "Una selección de nuestros sabores más representativos",
            viewFullMenu: "Ver Carta Completa →",
            reviewsTitle: "Lo que dicen de nosotros",
            location: {
                title: "Ubicación y Horario",
                openTitle: "Horario de Apertura",
                whereTitle: "¿Dónde estamos?",
                whereText: "En el corazón de la Costa Brava, un espacio diseñado para el disfrute de los sentidos."
            }
        },
        contact: {
            title: "Contacto",
            subtitle: "Estamos a tu disposición para reservas y consultas.",
            reservationsTitle: "Reservas",
            reservationsText: "La forma más rápida de reservar tu mesa es a través de WhatsApp o llamada telefónica.",
            whatsappBtn: "WhatsApp",
            phoneLabel: "Teléfono",
            emailLabel: "Email",
            scheduleLabel: "Horario",
            form: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                namePlaceholder: "Tu nombre",
                emailPlaceholder: "tu@email.com",
                messagePlaceholder: "¿En qué podemos ayudarte?",
                phonePlaceholder: "Tu teléfono",
                send: "Enviar Mensaje",
                disclaimer: "* Este formulario está preparado para futura integración.",
                sending: "Enviando...",
                success: "Mensaje enviado correctamente",
                error: "Hubo un error al enviar el mensaje",
                required: "Este campo es requerido", // a generic error message
            }
        },
        footer: {
            description: "Auténtica cocina peruana con un toque moderno en el corazón de Platja d'Aro.",
            schedule: "Horario",
            contact: "Contacto",
            rights: "Todos los derechos reservados.",
            privacy: "Privacidad",
            cookies: "Cookies",
            days: {
                monday: "Lunes",
                tuesday: "- Domingo", // Often used in ranges like "Lunes - Domingo" or specialized logic
                everyday: "Lunes - Domingo" // As a fallback or specific key if the ranges are simple
            }
        },
        common: {
            loading: "Cargando...",
        }
    },
    en: {
        nav: {
            home: "Home",
            menu: "Menu",
            contact: "Contact",
            book: "Book",
            bookTable: "Book a Table"
        },
        hero: {
            subtitle: "Peruvian Cuisine in Platja d'Aro",
            description: "A culinary experience fusing tradition and innovation. Discover authentic Peruvian flavors in an elegant and welcoming atmosphere.",
            bookTable: "Book a Table",
            viewMenu: "View Menu"
        },
        home: {
            featuredTitle: "Featured Dishes",
            featuredSubtitle: "A selection of our most representative flavors",
            viewFullMenu: "View Full Menu →",
            reviewsTitle: "What they say about us",
            location: {
                title: "Location & Hours",
                openTitle: "Opening Hours",
                whereTitle: "Where are we?",
                whereText: "In the heart of the Costa Brava, a space designed for the enjoyment of the senses."
            }
        },
        contact: {
            title: "Contact",
            subtitle: "We are at your disposal for reservations and inquiries.",
            reservationsTitle: "Reservations",
            reservationsText: "The fastest way to book your table is via WhatsApp or phone call.",
            whatsappBtn: "WhatsApp",
            phoneLabel: "Phone",
            emailLabel: "Email",
            scheduleLabel: "Opening Hours",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                namePlaceholder: "Your name",
                emailPlaceholder: "you@email.com",
                messagePlaceholder: "How can we help you?",
                phonePlaceholder: "Your phone",
                send: "Send Message",
                disclaimer: "* This form is prepared for future integration.",
                sending: "Sending...",
                success: "Message sent successfully",
                error: "There was an error sending the message",
                required: "This field is required",
            }
        },
        footer: {
            description: "Authentic Peruvian cuisine with a modern twist in the heart of Platja d'Aro.",
            schedule: "Opening Hours",
            contact: "Contact",
            rights: "All rights reserved.",
            privacy: "Privacy",
            cookies: "Cookies",
            days: {
                monday: "Monday",
                tuesday: "- Sunday",
                everyday: "Monday - Sunday"
            }
        },
        common: {
            loading: "Loading...",
        }
    }
};
