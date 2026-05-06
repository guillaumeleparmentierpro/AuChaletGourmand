/**
 * Fichier de gestion des langues pour Au Chalet Gourmand
 * Cotentin Web Studio - 2026
 */

const translations = {
    'fr': {
        // Navigation
        'nav-home': 'Accueil',
        'nav-products': 'Nos Rayons',
        'nav-contact': 'Contact',
        'nav-about': 'À Propos',

        // Section Hero
        'hero-badge': 'Équipé d\'un Distributeur Libre-Service 24h/24 & 7j/7',
        'hero-title': 'L\'excellence du terroir Normand',
        'hero-subtitle': 'De la mer à la terre, découvrez nos produits frais et locaux sélectionnés avec passion à Barneville-Carteret.',
        'btn-visit': 'Nous rendre visite',
        'btn-menu': '🍽️ Plat du jour & Menu (PDF)',

        // Titres Sections
        'title-our': 'Nos',
        'title-sections': 'Rayons',
        'title-info': 'Infos',
        'title-practical': 'Pratiques',

        // Catégories de produits
        'cat-maree': 'La Marée & Traiteur',
        'desc-maree': 'Poissons côtiers, huîtres de Denneville, homard bleu, coquillages et plats préparés marins.',
        'cat-primeur': 'Le Primeur',
        'desc-primeur': 'Fruits de saison et légumes frais cultivés sur nos terres à Surtainville.',
        'cat-epicerie': 'Épicerie & Crèmerie',
        'desc-epicerie': 'Fromagerie, produits du terroir, vins et délices d\'épicerie fine.',
        'cat-compo': 'Compositions Sur-Mesure',
        'desc-compo': 'Plateaux de fruits de mer, corbeilles de fruits et paniers garnis personnalisés.',

        // Infos Pratiques
        'info-find': '📍 Nous trouver',
        'btn-maps': '📍 Ouvrir dans Google Maps',
        'info-contact': '📞 Nous contacter',
        'info-hours': '🕒 Horaires d\'ouverture',
        'hours-note-title': 'Bon à savoir :',
        'hours-note-text': 'Notre distributeur automatique est accessible en libre-service 24h/24 et 7j/7 !',

        // Jours de la semaine
        'day-1': 'Lundi',
        'day-2': 'Mardi',
        'day-3': 'Mercredi',
        'day-4': 'Jeudi',
        'day-5': 'Vendredi',
        'day-6': 'Samedi',
        'day-7': 'Dimanche',

        // Paiements
        'info-pay': '💳 Moyens de paiement',
        'pay-card': 'Carte Bancaire',
        'pay-cash': 'Espèces',
        'pay-ticket': 'Carte Tickets Restaurant',

        // Réseaux Sociaux & Footer
        'social-follow': 'Suivez-nous sur nos réseaux',
        'footer-rights': 'Tous droits réservés.',
        'footer-creation': 'Création web :'
    },
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-products': 'Our Sections',
        'nav-contact': 'Contact',
        'nav-about': 'About Us',

        // Section Hero
        'hero-badge': 'Equipped with a 24/7 Self-Service Vending Machine',
        'hero-title': 'Excellence of the Normandy Terroir',
        'hero-subtitle': 'From sea to land, discover our fresh and local products selected with passion in Barneville-Carteret.',
        'btn-visit': 'Visit Us',
        'btn-menu': '🍽️ Daily Special & Menu (PDF)',

        // Titres Sections
        'title-our': 'Our',
        'title-sections': 'Sections',
        'title-info': 'Practical',
        'title-practical': 'Information',

        // Catégories de produits
        'cat-maree': 'Seafood & Caterer',
        'desc-maree': 'Coastal fish, oysters from Denneville, Cotentin blue lobster, shellfish and prepared seafood dishes.',
        'cat-primeur': 'The Greengrocer',
        'desc-primeur': 'Seasonal fruits and fresh vegetables mostly grown on our lands in Surtainville.',
        'cat-epicerie': 'Fine Grocery & Dairy',
        'desc-epicerie': 'Cheeses, local products, wines and fine grocery delights.',
        'cat-compo': 'Custom Compositions',
        'desc-compo': 'Custom seafood platters, fruit baskets and local gourmet hampers.',

        // Infos Pratiques
        'info-find': '📍 Find Us',
        'btn-maps': '📍 Open in Google Maps',
        'info-contact': '📞 Contact Us',
        'info-hours': '🕒 Opening Hours',
        'hours-note-title': 'Good to know:',
        'hours-note-text': 'Our vending machine is available for self-service 24/7!',

        // Jours de la semaine
        'day-1': 'Monday',
        'day-2': 'Tuesday',
        'day-3': 'Wednesday',
        'day-4': 'Thursday',
        'day-5': 'Friday',
        'day-6': 'Saturday',
        'day-7': 'Sunday',

        // Paiements
        'info-pay': '💳 Payment Methods',
        'pay-card': 'Credit Card',
        'pay-cash': 'Cash',
        'pay-ticket': 'Restaurant Voucher Card',

        // Réseaux Sociaux & Footer
        'social-follow': 'Follow us on social media',
        'footer-rights': 'All rights reserved.',
        'footer-creation': 'Web creation:'
    }
};

/**
 * Fonction pour changer la langue du site
 * @param {string} lang - 'fr' ou 'en'
 */
function setLanguage(lang) {
    // On boucle sur tous les éléments ayant l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Si la traduction existe pour cette clé
        if (translations[lang][key]) {
            // Pour les éléments classiques (textes)
            element.innerText = translations[lang][key];
        }
    });

    // On sauvegarde la préférence de langue dans le navigateur
    localStorage.setItem('preferredLang', lang);

    // On met à jour l'attribut lang du document pour le SEO
    document.documentElement.lang = lang;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // On récupère la langue sauvegardée ou on utilise le français par défaut
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    setLanguage(savedLang);
});
