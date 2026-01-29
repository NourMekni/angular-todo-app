# 📝 Application To-Do List - Angular + NgRx

Une application de gestion de tâches moderne construite avec Angular 18+ et NgRx pour la gestion d'état.

## ✨ Fonctionnalités

- ✅ **Authentification simple** : Connexion par email (mock)
- ✅ **Gestion complète des tâches** :
  - Créer, modifier et supprimer des tâches
  - Marquer les tâches comme terminées
  - Système de priorités (1 à 5)
  - Dates d'échéance
- ✅ **Gestion d'état avec NgRx** : Gestion d'état prévisible
- ✅ **Interface utilisateur intuitive** : Design moderne et responsive
- ✅ **Multi-utilisateurs** : Chaque utilisateur a ses propres tâches


## 🎯 Captures d'écran

### Écran de connexion
Page d'authentification simple permettant de se connecter avec un email.

### Liste des tâches
- Séparation claire entre tâches en cours et terminées
- Code couleur par priorité
- Actions rapides (modifier, supprimer, marquer comme terminée)

## 🚀 Installation

### Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn
- Angular CLI (`npm install -g @angular/cli`)

### Étapes d'installation

1. **Créer le projet**
```bash
ng new todo-app --routing --style=scss
cd todo-app
```

2. **Installer les dépendances NgRx**
```bash
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest
```

3. **Installer les dépendances supplémentaires**
```bash
npm install uuid
npm install --save-dev @types/uuid
```

4. **Copier les fichiers du projet**
   - Suivez la structure de fichiers décrite ci-dessous
   - Copiez tous les composants, modèles et store

5. **Lancer l'application**
```bash
ng serve
```

6. **Ouvrir dans le navigateur**
```
http://localhost:4200
```

## 📁 Structure du projet

```
src/app/
├── models/
│   ├── task.model.ts          # Interface Task
│   └── user.model.ts          # Interface User
├── store/
│   ├── auth/
│   │   ├── auth.actions.ts    # Actions d'authentification
│   │   ├── auth.reducer.ts    # Reducer d'authentification
│   │   └── auth.selectors.ts  # Sélecteurs d'authentification
│   └── tasks/
│       ├── tasks.actions.ts   # Actions des tâches
│       ├── tasks.reducer.ts   # Reducer des tâches
│       └── tasks.selectors.ts # Sélecteurs des tâches
├── components/
│   ├── login/                 # Composant de connexion
│   │   
│   ├── task-list/             # Composant liste des tâches
│   │   
│   └── task-form/             # Composant formulaire de tâche
│       
├── app.component.ts           # Composant principal
└── app.config.ts              # Configuration NgRx
```

## 🔧 Technologies utilisées

- **Angular 18+** : Framework frontend
- **NgRx** : Gestion d'état Redux pour Angular
- **TypeScript** : Langage de programmation
- **SCSS** : Préprocesseur CSS
- **UUID** : Génération d'identifiants uniques
- **Standalone Components** : Architecture moderne Angular

## 📚 Concepts NgRx implémentés

### Store Structure

```typescript
{
  auth: {
    user: User | null
  },
  tasks: {
    tasks: Task[]
  }
}
```

### Actions principales

**Authentification** :
- `login` : Connexion utilisateur
- `logout` : Déconnexion utilisateur

**Tâches** :
- `addTask` : Ajouter une tâche
- `updateTask` : Modifier une tâche
- `deleteTask` : Supprimer une tâche
- `toggleTask` : Basculer l'état de complétion
- `clearTasks` : Effacer toutes les tâches

### Selectors

- `selectUser` : Récupère l'utilisateur connecté
- `selectAllTasks` : Récupère toutes les tâches
- `selectUserTasks` : Filtre les tâches par utilisateur
- `selectPendingTasks` : Tâches en cours d'un utilisateur
- `selectCompletedTasks` : Tâches terminées d'un utilisateur

## 🎨 Système de priorités

| Priorité | Couleur | Description |
|----------|---------|-------------|
| 1 | 🔵 Bleu | Très basse |
| 2 | 🟣 Violet | Basse |
| 3 | 🟠 Orange | Moyenne |
| 4 | 🟠 Orange foncé | Haute |
| 5 | 🔴 Rouge | Très haute |

## 💡 Utilisation

### Connexion
1. Entrez votre email sur la page de connexion
2. Cliquez sur "Se connecter"

### Créer une tâche
1. Remplissez le formulaire :
   - Titre (obligatoire)
   - Description
   - Priorité (1-5)
   - Date d'échéance
2. Cliquez sur "Ajouter"

### Modifier une tâche
1. Cliquez sur l'icône ✏️ sur la tâche
2. Modifiez les informations
3. Cliquez sur "Modifier"

### Marquer comme terminée
- Cochez la case à côté de la tâche

### Supprimer une tâche
- Cliquez sur l'icône 🗑️ (confirmation demandée)

### Déconnexion
- Cliquez sur "Déconnexion" (efface toutes les tâches de la session)


