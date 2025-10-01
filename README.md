# Mon Portfolio — React + TypeScript

Un portfolio personnel interactif développé avec React et TypeScript, mettant en valeur mes projets et compétences avec un design cyberpunk.

## 🚀 Technologies Utilisées

- React
- TypeScript
- CSS3 / HTML5
- EmailJS

## ✨ Fonctionnalités

- Design cyberpunk avec effets visuels
- Animations pixel art et effets de glitch
- Sections responsives : À propos, Projets, Compétences, Contact

## 🛠 Installation & Démarrage

```bash
npm install
npm start
```
Le serveur démarre sur `http://localhost:3000`.

## 🔍 Vérification de types

```bash
npm run type-check
```

## 🏗 Build de production

```bash
npm run build
```
Le dossier `build/` est prêt à être déployé.

### Aperçu local du build
```bash
npm install -g serve
serve -s build
```

## 📂 Structure

```
src/
  App.tsx
  index.tsx
  reportWebVitals.ts
  components/
    About/ About.tsx
    Contact/ Contact.tsx
    Effect/ PixelEffect.tsx, ThunderEffect.tsx
    Footer/ Footer.tsx
    Header/ Header.tsx
    Projects/ Projects.tsx
    Skills/ Skills.tsx
  styles/ *.css
  types/
    global.d.ts
  react-app-env.d.ts
```

## 🚀 Déploiement

- Déploiement statique (GitHub Pages, Vercel, Netlify…) en servant `build/`.