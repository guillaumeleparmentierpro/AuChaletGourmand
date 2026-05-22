/**
 * Fichier de gestion des langues pour Au Chalet Gourmand
 * Cotentin Web Studio - 2026
 */

const translations = {
    'fr': {
        // Nouveauté
        'menu-title-our': 'Notre',
        'menu-title-daily': 'Menu du jour',
        'menu-starters': 'Les Entrées',
        'menu-mains': 'Les Plateaux Préparés',
        'mod-vending-title': 'Distributeur libre-service',
        'mod-vending-note': 'Accessible 24h/24 et 7j/7 devant la boutique !',
        
        // Navigation
        'nav-home': 'Accueil',
        'nav-products': 'Nos Rayons',
        'nav-click': 'Call & Collect',
        'nav-menu': 'Menu du Jour',
        'nav-contact': 'Contact',
        'nav-about': 'À Propos',

        // Section Hero
        'hero-badge': 'Équipé d\'un Distributeur Libre-Service 24h/24 & 7j/7',
        'hero-title': 'L\'excellence du terroir Normand',
        'hero-subtitle': 'De la mer à la terre, découvrez nos produits frais et locaux sélectionnés avec passion à Barneville-Carteret.',
        'btn-visit': 'Nous rendre visite',

        // Titres Sections (Général)
        'title-our': 'Nos',
        'title-sections': 'Rayons',
        'title-seen': 'Vu dans la',
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

        // Infos Pratiques - Le Magasin
        'mod-shop-title': 'Le Magasin',
        'mod-shop-address': 'Adresse :',
        'btn-maps': 'Itinéraire Google Maps',
        'relais-title': 'Point Relais :',
        'relais-desc': 'Retrait et dépôt de colis Pick-up & UPS.',

        // Jours de la semaine
        'day-1': 'Lundi',
        'day-2': 'Mardi',
        'day-3': 'Mercredi',
        'day-4': 'Jeudi',
        'day-5': 'Vendredi',
        'day-6': 'Samedi',
        'day-7': 'Dimanche',

        // Infos Pratiques - Les Marchés
        'mod-market-title': 'Nos Marchés',
        'mod-market-intro': 'Retrouvez nos fruits, légumes et produits frais chaque semaine sur les marchés de la région :',
        'market-prod-1': 'Poisson, fruits & légumes',
        'market-time-1': 'Mercredi',
        'market-prod-2': 'Fruits & légumes',
        'market-time-2': 'Jeudi',
        'market-time-3': 'Vendredi',
        'market-time-4': 'Samedi',

        // Infos Pratiques - Le Distributeur
        'mod-vending-content-title': 'Ce que vous y trouverez :',
        'vending-item-1': 'Huîtres fraîches de producteurs locaux',
        'vending-item-2': 'Plats préparés et terrines',
        'vending-item-3': 'Sélection de fromages et produits du terroir',

        // Paiements
        'info-pay': '💳 Moyens de paiement :',
        'pay-card': 'Carte Bancaire (Boutique & Distributeur)',
        'pay-cash': 'Espèces (Boutique uniquement)',
        'pay-ticket': 'Cartes & Tickets Restaurant (Boutique uniquement)',

        // Page : Call & Collect
        'cc-title': 'Call & Collect',
        'cc-subtitle': 'Sécurisez vos commandes fraîches et retirez-les 24h/24 !',
        'cc-how': 'Comment ça marche ?',
        'step-1-title': '1. Je choisis',
        'step-1-desc': 'Sélectionnez un de nos packs exclusifs détaillés ci-dessous.',
        'step-2-title': '2. Je réserve & je paie',
        'step-2-desc': 'Appelez-nous pour vérifier nos stocks du jour. Une fois validé, vous recevrez un lien de paiement sécurisé par SMS pour bloquer votre réservation.',
        'step-3-title': '3. Je retire 24/7',
        'step-3-desc': 'Récupérez votre commande fraîchement préparée dans votre casier réservé au distributeur automatique, à l\'heure qui vous convient !',
        'cc-packs-our': 'Nos Packs',
        'cc-packs-exclusive': 'Exclusifs',
        'pack-apero-title': 'Pack "Apéro Plage" - 35 €',
        'pack-apero-desc': 'La sélection parfaite pour un coucher de soleil sur la plage de Carteret.',
        'pack-apero-1': 'Bulots cuits du jour & Mayonnaise maison',
        'pack-apero-2': 'Rillettes de la mer artisanales',
        'pack-apero-3': 'Bouteille de vin blanc frais (au choix)',
        'pack-gite-title': 'Pack "Arrivée au Gîte" - 45 €',
        'pack-gite-desc': 'Vous arrivez tard ? Récupérez votre dîner dans le distributeur et profitez de votre première soirée.',
        'pack-gite-1': 'Soupe de poisson artisanale & croûtons',
        'pack-gite-2': 'Sélection de fromages normands & Beurre',
        'pack-gite-3': 'Bouteille de Cidre bouché de la région',
        'cta-title': 'Pour vérifier les disponibilités du jour',
        'cta-desc': 'Appelez-nous directement ! Nous vous conseillerons sur les meilleurs arrivages pour vos plateaux.',
        'cta-btn': 'Réserver au 02 33 04 61 40',

        // Page : À Propos
        'about-title-our': 'Notre',
        'about-title-story': 'Histoire',
        'about-p1': 'Ouverte depuis 2015 par Anne-Laure Gaumain au cœur de Barneville-Carteret, la boutique-poissonnerie Au Chalet Gourmand est née d\'une passion profonde pour les richesses culinaires de notre belle Normandie.',
        'about-h2-1': 'L\'Amour du Terroir et des Circuits Courts',
        'about-p2': 'Notre mission est simple : offrir à nos clients le meilleur de la terre et de la mer. Nous travaillons main dans la main avec des producteurs et professionnels locaux reconnus. Vous retrouverez sur nos étals les huîtres de Paolo, ou encore les fruits de mer et poissons pêchés par Gilles Muzard et Laurent Blondel, figures emblématiques de la pêche à Carteret. Côté terre, nous privilégions les fruits et légumes cultivés sur nos terres maraîchères de Surtainville.',
        'about-h2-2': 'Une Équipe à votre écoute',
        'about-p3': 'Que vous souhaitiez commander une choucroute de la mer, une paella, ou composer un repas complet, Anne-Laure et Vanessa mettent tout en œuvre pour vous conseiller avec le sourire et accompagner vos talents culinaires.',
        'about-quote': '"La gourmandise est un art, le terroir est notre inspiration."',

        // Réseaux Sociaux & Footer
        'social-follow': 'Suivez-nous sur nos réseaux',
        'footer-rights': 'Tous droits réservés.',
        'footer-creation': 'Création web :'
    },
    'en': {
        // Nouveauté
        'mod-vending-title': 'Self-Service Vending Machine',
        'mod-vending-note': 'Accessible 24/7 right outside the shop!',
        'menu-title-our': 'Our',
        'menu-title-daily': 'Daily Menu',
        'menu-starters': 'Starters',
        'menu-mains': 'Prepared Platters',
        
        // Navigation
        'nav-home': 'Home',
        'nav-products': 'Our Sections',
        'nav-click': 'Call & Collect',
        'nav-menu': 'Daily Menu',
        'nav-contact': 'Contact',
        'nav-about': 'About Us',

        // Section Hero
        'hero-badge': 'Equipped with a 24/7 Self-Service Vending Machine',
        'hero-title': 'Excellence of the Normandy Terroir',
        'hero-subtitle': 'From sea to land, discover our fresh and local products selected with passion in Barneville-Carteret.',
        'btn-visit': 'Visit Us',

        // Titres Sections (Général)
        'title-our': 'Our',
        'title-sections': 'Sections',
        'title-seen': 'Featured in',
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

        // Infos Pratiques - Le Magasin
        'mod-shop-title': 'The Shop',
        'mod-shop-address': 'Address:',
        'btn-maps': 'Open in Google Maps',
        'relais-title': 'Pickup Point:',
        'relais-desc': 'Pick-up and drop-off point for Pick-up & UPS parcels.',

        // Jours de la semaine
        'day-1': 'Monday',
        'day-2': 'Tuesday',
        'day-3': 'Wednesday',
        'day-4': 'Thursday',
        'day-5': 'Friday',
        'day-6': 'Saturday',
        'day-7': 'Sunday',

        // Infos Pratiques - Les Marchés
        'mod-market-title': 'Our Markets',
        'mod-market-intro': 'Find our fruits, vegetables, and fresh products every week at local markets:',
        'market-prod-1': 'Fish, fruits & vegetables',
        'market-time-1': 'Wednesday',
        'market-prod-2': 'Fruits & légumes',
        'market-time-2': 'Thursday',
        'market-time-3': 'Friday',
        'market-time-4': 'Saturday',

        // Infos Pratiques - Le Distributeur
        'mod-vending-content-title': 'What you\'ll find inside:',
        'vending-item-1': 'Fresh oysters from local producers',
        'vending-item-2': 'Prepared dishes and terrines',
        'vending-item-3': 'Selection of cheeses and local products',

        // Paiements
        'info-pay': '💳 Payment Methods:',
        'pay-card': 'Credit Card (Shop & Vending Machine)',
        'pay-cash': 'Cash (Shop only)',
        'pay-ticket': 'Cards & Restaurant Vouchers (Shop only)',

        // Page : Call & Collect
        'cc-title': 'Call & Collect',
        'cc-subtitle': 'Secure your fresh orders and pick them up 24/7!',
        'cc-how': 'How to do ?',
        'step-1-title': '1. I Choose',
        'step-1-desc': 'Select one of our exclusive packs detailed below.',
        'step-2-title': '2. I Book & Pay',
        'step-2-desc': 'Call us to check our daily stock. Once confirmed, you will receive a secure payment link via SMS to lock in your reservation.',
        'step-3-title': '3. I Pick Up 24/7',
        'step-3-desc': 'Retrieve your freshly prepared order from your reserved locker in the vending machine, at whatever time suits you!',
        'cc-packs-our': 'Our Exclusive',
        'cc-packs-exclusive': 'Packs',
        'pack-apero-title': '"Beach Sunset" Pack - €35',
        'pack-apero-desc': 'The perfect selection for a sunset on Carteret beach.',
        'pack-apero-1': 'Freshly cooked whelks & Homemade mayonnaise',
        'pack-apero-2': 'Artisanal seafood rillettes',
        'pack-apero-3': 'Bottle of chilled white wine (your choice)',
        'pack-gite-title': '"Welcome to the Cottage" Pack - €45',
        'pack-gite-desc': 'Arriving late? Pick up your dinner from the vending machine and enjoy your first evening.',
        'pack-gite-1': 'Artisanal fish soup & croutons',
        'pack-gite-2': 'Selection of Normandy cheeses & Butter',
        'pack-gite-3': 'Bottle of local corked Cider',
        'cta-title': 'To check today\'s availability',
        'cta-desc': 'Call us directly! We will advise you on the best fresh arrivals for your platters.',
        'cta-btn': 'Book at +33 2 33 04 61 40',

        // Page : À Propos
        'about-title-our': 'Our',
        'about-title-story': 'Story',
        'about-p1': 'Opened in 2015 by Anne-Laure Gaumain in the heart of Barneville-Carteret, the fishmonger-delicatessen Au Chalet Gourmand was born from a deep passion for the culinary riches of our beautiful Normandy.',
        'about-h2-1': 'Love for Local Produce and Short Supply Chains',
        'about-p2': 'Our mission is simple: to offer our customers the best of the land and sea. We work hand in hand with renowned local producers and professionals. On our stalls, you will find Paolo\'s oysters, or seafood and fish caught by Gilles Muzard and Laurent Blondel, iconic figures of Carteret fishing. On the land side, we favor fruits and vegetables grown on our market garden lands in Surtainville.',
        'about-h2-2': 'A Team at Your Service',
        'about-p3': 'Whether you want to order a seafood sauerkraut, a paella, or put together a full meal, Anne-Laure and Vanessa do their utmost to advise you with a smile and support your culinary talents.',
        'about-quote': '"Gluttony is an art, the terroir is our inspiration."',

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
    // 1. On traduit tous les textes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[lang][key]) {
            // Attention : s'il y a des balises HTML (comme les <br> ou les <span>) on utilise innerHTML
            // Sinon on garde innerText pour plus de sécurité
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // 2. On gère l'aspect visuel des drapeaux (la fameuse nouveauté)
    // On retire la classe active de TOUS les drapeaux
    document.querySelectorAll('.emoji-flag').forEach(flag => {
        flag.classList.remove('active');
    });
    
    // On ajoute la classe active UNIQUEMENT sur le drapeau cliqué
    const activeFlag = document.getElementById(`flag-${lang}`);
    if (activeFlag) {
        activeFlag.classList.add('active');
    }

    // 3. On sauvegarde la préférence de langue
    localStorage.setItem('preferredLang', lang);

    // 4. On met à jour l'attribut lang du document pour le SEO
    document.documentElement.lang = lang;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // On récupère la langue sauvegardée ou on utilise le français par défaut
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    setLanguage(savedLang);
});
