# Stress Zéro, Finances Héro - Landing Page

Landing page professionnelle pour le lancement du livre "Stress Zéro, Finances Héro" par Guesso (L'Éveil).

## 📋 Vue d'ensemble

Cette landing page est optimisée pour la conversion avec :
- ✅ Capture d'emails (lead magnet gratuit)
- ✅ CTA Amazon principal
- ✅ Section bonus acheteurs
- ✅ Design moderne et responsive
- ✅ Performance optimisée (Lighthouse 90+)
- ✅ SEO & accessibilité

## 📁 Structure des fichiers

```
stress-zero/
├── index.html          # Structure HTML complète
├── styles.css          # Design system & styles
├── script.js           # Interactivité vanilla JS
├── README.md           # Ce fichier
└── assets/             # À créer pour les images
    ├── book-cover.jpg
    ├── og-image.jpg
    └── favicon.png
```

## 🎨 Design System

### Palette de couleurs
- **Primaire**: `#2C5F7C` (bleu profond)
- **Accent**: `#F4A261` (orange doux)
- **Neutre foncé**: `#2A2A2A`
- **Neutre clair**: `#F8F9FA`
- **Blanc**: `#FFFFFF`

### Typographie
- **Titres**: Montserrat (Bold/Extra Bold)
- **Corps**: Open Sans (Regular/Semi-Bold)
- **Citation**: Georgia (serif, italique)

### Points de rupture responsive
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Installation & Déploiement

### Option 1: Hébergement simple (recommandé)

**Netlify (gratuit):**
1. Créer un compte sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `stress-zero/` dans l'interface
3. Configuration domaine personnalisé: `leveilmental.fr/stress-zero`
4. Activer HTTPS automatique

**Vercel (gratuit):**
1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI: `npm install -g vercel`
3. Dans le dossier: `vercel`
4. Suivre les instructions

### Option 2: Serveur traditionnel

**Via FTP:**
1. Se connecter au serveur `leveilmental.fr`
2. Uploader tous les fichiers dans `/stress-zero/`
3. Vérifier l'accès: `https://leveilmental.fr/stress-zero`

**Via SSH:**
```bash
# Se connecter au serveur
ssh user@leveilmental.fr

# Créer le dossier
mkdir -p /var/www/leveilmental.fr/stress-zero

# Uploader les fichiers (depuis votre machine locale)
scp -r stress-zero/* user@leveilmental.fr:/var/www/leveilmental.fr/stress-zero/
```

## 📷 Images à fournir

### Images requises
| Fichier | Dimensions | Format | Description |
|---------|-----------|--------|-------------|
| `book-cover.jpg` | 600x900px | JPG | Couverture du livre |
| `og-image.jpg` | 1200x630px | JPG | Image pour réseaux sociaux |
| `favicon.png` | 512x512px | PNG | Icône du site |

### Optimisation images
Utiliser [TinyPNG](https://tinypng.com/) pour compresser sans perte de qualité.

```bash
# Placer les images dans:
stress-zero/assets/
```

## ⚙️ Configuration

### 1. Google Analytics
Dans `index.html`, remplacer:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```
Par votre ID Analytics:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 2. Backend formulaire email
Le formulaire POST vers `/api/subscribe`. Options:

**Option A: Formspree (simple, gratuit)**
```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

**Option B: Mailchimp**
Utiliser l'URL d'embed Mailchimp dans l'attribut `action`.

**Option C: Backend custom**
Créer un endpoint `/api/subscribe` qui accepte:
```json
{
  "prenom": "Julie",
  "email": "julie@example.com"
}
```

### 3. Liens Amazon
Tous les liens pointent vers `https://bit.ly/StressZeroLivre`.
À remplacer par votre lien Amazon réel.

## ✅ Checklist avant mise en ligne

- [ ] Remplacer les images placeholder par les vraies images
- [ ] Configurer Google Analytics (remplacer `GA_MEASUREMENT_ID`)
- [ ] Configurer le formulaire email (backend ou service)
- [ ] Mettre à jour le lien Amazon
- [ ] Tester sur mobile (Chrome DevTools)
- [ ] Tester sur tablet
- [ ] Valider tous les liens
- [ ] Vérifier le formulaire email
- [ ] Test de performance (Lighthouse)
- [ ] Test d'accessibilité (WAVE)
- [ ] Configurer le domaine personnalisé
- [ ] Activer HTTPS

## 🧪 Tests

### Test local
Ouvrir `index.html` dans un navigateur, ou utiliser un serveur local:

**Python 3:**
```bash
cd stress-zero
python -m http.server 8000
# Ouvrir http://localhost:8000
```

**Node.js (npx):**
```bash
npx serve stress-zero
```

**VS Code Live Server:**
Clic droit sur `index.html` > "Open with Live Server"

### Test responsive
- Chrome DevTools (F12) > Toggle Device Toolbar (Ctrl+Shift+M)
- Tester: iPhone SE, iPhone 12, iPad, Desktop

### Test performance
[PageSpeed Insights](https://pagespeed.web.dev/)
- Objectif: Score > 90 mobile et desktop

### Test accessibilité
[WAVE Extension](https://wave.webaim.org/extension/)
- 0 erreurs critiques
- Contrast ratio WCAG AA

## 🔧 Personnalisation

### Modifier les couleurs
Dans `styles.css`, section `:root`:
```css
:root {
    --color-primary: #VotreCouleur;
    --color-accent: #VotreCouleur;
}
```

### Ajouter une section
1. Copier une section existante dans `index.html`
2. Créer les styles dans `styles.css`
3. La section apparaîtra automatiquement avec l'animation fade-in

### Modifier les témoignages
Dans `index.html`, section `#testimonials`:
```html
<div class="testimonial-card">
    <div class="testimonial-quote">"Votre témoignage"</div>
    <div class="testimonial-author">
        <div class="author-avatar">J</div>
        <div class="author-info">
            <div class="author-name">Prénom, âge</div>
        </div>
    </div>
</div>
```

## 📊 Fonctionnalités JavaScript

- **Smooth scroll**: Scroll fluide vers sections
- **Validation formulaire**: Vérification temps réel
- **Intersection Observer**: Animations au scroll
- **Lazy loading**: Chargement différé des images
- **Analytics tracking**: Suivi des clics externes
- **Progress bar**: Barre de progression du scroll

## 🔒 Sécurité & RGPD

- Formulaire email avec validation côté client
- Attribut `rel="noopener noreferrer"` sur liens externes
- Texte légal "Vos données restent privées. Zéro spam."
- Ajouter liens mentions légales et politique de confidentialité

## 🐛 Dépannage

### Le formulaire ne fonctionne pas
- Vérifier que l'attribut `action` pointe vers un endpoint valide
- Tester avec Formspree pour une solution rapide

### Les images ne s'affichent pas
- Vérifier les chemins dans `index.html`
- S'assurer que les images sont dans le bon dossier
- Vérifier les permissions fichiers (644)

### Les animations ne fonctionnent pas
- Vérifier que `script.js` est chargé
- Ouvrir la console (F12) pour voir les erreurs
- Désactiver les bloqueurs de scripts

### Le site n'est pas responsive
- Vérifier la balise `<meta name="viewport">` dans `<head>`
- Tester dans Chrome DevTools mode responsive

## 📈 Optimisations futures

- [ ] A/B testing des CTA (couleurs, textes)
- [ ] Ajouter un chatbot (Crisp, Intercom)
- [ ] Intégrer des avis Amazon (API)
- [ ] Ajouter un compte à rebours dynamique
- [ ] Popup d'intention de sortie
- [ ] Pixel Facebook / TikTok pour retargeting

## 📞 Support

Pour toute question technique:
- Email: support@leveilmental.fr
- Documentation: Ce README

## 🎯 Métriques de succès

Objectifs de conversion:
- **Taux de capture email**: > 10%
- **Taux de clic Amazon**: > 5%
- **Temps moyen sur page**: > 2 minutes
- **Taux de rebond**: < 60%

## 📝 Licence

© 2025 L'Éveil. Tous droits réservés.

---

**Version**: 1.0.0  
**Dernière mise à jour**: Décembre 2025  
**Auteur**: Développé pour Guesso (L'Éveil)
