# 📊 RealTime-Dashboard – Application d’analyse en temps réel

**RealTime-Dashboard** est une application web moderne qui permet d'afficher, filtrer et analyser des données dynamiques en temps réel. Elle intègre une authentification sécurisée, une visualisation claire via des graphiques interactifs, et une architecture propre et optimisée.

---

## 🎯 Fonctionnalités

- 🔐 Authentification sécurisée par JWT
- 🧑‍💻 Gestion des utilisateurs (login, token, rôles)
- 📈 Dashboard avec données temps réel (via polling ou WebSocket)
- 📊 Graphiques interactifs (Recharts ou Chart.js)
- 💬 Système de notifications
- ⚙️ Filtres dynamiques (ex : "Aujourd’hui", "7 derniers jours")
- 📱 Interface responsive avec TailwindCSS
- 🔁 Mise à jour automatique des données
- 🧪 Tests unitaires (Jest + React Testing Library)
- 📄 Documentation claire & propre

---

## 📦 Prérequis

- Node.js (v18+ recommandé)
- NPM ou Yarn
- MySQL / MongoDB (optionnel, si tu relies à une vraie BDD)
- Git

---

## 🚀 Installation

1. Clonez le projet :

```bash
git clone https://github.com/ton-utilisateur/realtime-dashboard.git
cd realtime-dashboard
cd backend
npm install
cp .env.example .env
# Remplir la variable JWT_SECRET dans .env
node index.js
cd ../frontend
npm install
npm run dev
