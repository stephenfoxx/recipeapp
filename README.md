# 🍳 Chef-flow Recipe Generator App

A smart recipe generator that helps users turn simple ingredients into complete recipes — powered by AI.  
Users can add ingredients, and the app generates a detailed recipe with step-by-step cooking instructions.

---

## 🌟 Features

- 🥕 **Ingredient-based Recipe Generation** – Users input any ingredients they have, and the app creates a recipe idea around them.
- 🤖 **AI-Powered Suggestions** – Integrates with the **Spoonacular API** (or AI model like Mistral/Claude) to generate creative and relevant recipes.
- 🧾 **Dynamic Recipe Display** – Recipes are displayed in a clear, easy-to-follow format.
- ⬇️ **Auto Scroll Feature** – Smoothly scrolls down to the generated recipe for better user experience.
- 🧱 **Modular Component Design** – Built with reusable React components.
- 💬 **Accessible UI** – Includes `aria-label` attributes for improved accessibility.
- 🎨 **Responsive Design** – Works seamlessly across desktop and mobile screens.

---

## 🛠️ Tech Stack

**Frontend:**
- React (with Hooks and Functional Components)
- HTML5 / CSS3  
- JavaScript (ES6+)

**APIs:**
- [Spoonacular API](https://spoonacular.com/food-api) for recipe generation  
- *(Optional)* [Claude API](https://claude.ai) or Mistral for AI-generated instructions

---

## 📂 Folder Structure

📦 ai-recipe-generator
├── src/
│ ├── Components/
│ │ ├── ClaudeRecipe.jsx
│ │ ├── Header.jsx
| | ├── ingredientsLists.jsx
| | ├── Main.jsx
│ ├── pages/
│ ├── ai.js
│ ├── App.jsx
│ ├── index.js
│ └── App.css
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-recipe-generator.git
   cd ai-recipe-generator
Install dependencies

bash
Copy code
npm install
Set up your API key

Create a .env file in the root directory.

Add your Spoonacular (or other API) key:

bash
Copy code
REACT_APP_SPOONACULAR_KEY=your_api_key_here
Start the development server

bash
Copy code
npm run dev
or

bash
Copy code
npm start
