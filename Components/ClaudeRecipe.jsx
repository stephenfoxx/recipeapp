import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    
    return (
      <main>
        <section className="get-recipe" aria-live="polite">
          <div className="reci-div">
            <img src="./src/images/flow.jpg" alt="" />
            <h2>Mama floww Recommends:</h2>
          </div>
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
      </main>
    );
}