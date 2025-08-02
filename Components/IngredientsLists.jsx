export default function IngredientsLists(props) {


    const ingredientListItems = props.ingredients.map((ingredient) => (
      <li key={ingredient}>{ingredient}</li>
    ));


    return (
      <main>
        <section className="display">
          <h1>Ingredients on hand :</h1>

          <ul>{ingredientListItems}</ul>

          {props.ingredients.length > 3 && (
            <div className="display-div" ref={props.ref}>
              <div>
                <h2> ready for recipe</h2>
                <p>Generate a recipe from your list of ingredients</p>
              </div>

              <button className="recipe-button" onClick={props.getRecipe}>
                get a recipe
              </button>
            </div>
          )}
        </section>
      </main>
    ); 
}
