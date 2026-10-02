/* Réglages du site Wari Network : seul fichier à modifier avant la mise en ligne.
   Un champ laissé vide masque l'élément correspondant sur la page. */
window.WARI_CONFIG = {
  // Adresse de l'API Django, sans barre finale (active le formulaire « Restez informé »).
  // Exemple : 'https://api.votre-domaine.com/api'
  apiBaseUrl: 'https://warinetwork.eu.pythonanywhere.com/api',

  // E-mail affiché dans « Vous avez d'autres questions ? ». Exemple : 'contact@votre-domaine.com'
  contactEmail: '',

  // Chaîne WhatsApp officielle (bloc « Communauté », bouton flottant, proposition après téléchargement).
  // Exemple : 'https://whatsapp.com/channel/0029Va...'
  whatsappChannel: 'https://whatsapp.com/channel/0029VbDmPPeD38CKr9Jmft3Y',

  // Liens des réseaux sociaux officiels (laisser vide pour masquer).
  social: {
    telegram: '',
    facebook: '',
    x: '',
    youtube: '',
  },
};
