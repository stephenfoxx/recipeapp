import React from "react"
import IngredientsLists from "../Components/IngredientsLists";
import ClaudeRecipe from "../Components/ClaudeRecipe";
import { getRecipeFromMistral } from "../src/ai";




export default function Main() {
    
  const [ingredients, setIngredients] = React.useState([]);  

  
    function addIngredient (formData) {
      const newIngredient = formData.get("newingredient")
       setIngredients (prevIngredients => [...prevIngredients, newIngredient])
      
    
    
      
        
  }
  
  const [recipe, setRecipe] = React.useState("");

  const recipeSection = React.useRef(null)
  

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView ({behavior : "smooth"})
    }

  }, [recipe] )

  async function getRecipe() {
    const recipeShown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeShown)
  } 
    


    return (
      <main className="main ">
        <form action={addIngredient} className="addingredient">
          <input
            type="text"
            aria-label="Add ingredient "
            placeholder="e.g - oregano"
            name="newingredient"
          />
          <button>Add ingredient </button>
        </form>

        {ingredients.length > 0 && (
          <IngredientsLists
            ref ={recipeSection}
            ingredients={ingredients}
            getRecipe={getRecipe}
          />
        )}

        {recipe && <ClaudeRecipe
          recipe={recipe}
        />}
      </main>
    );
}
