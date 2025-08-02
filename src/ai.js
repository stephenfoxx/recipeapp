import { HfInference } from '@huggingface/inference'


const SYSTEM_PROMPT = `you are an ai assistant that receives a list of ingredienrs that a user has and suggests a recipe they could make with some or all  of those ingredients . you dont neeed to use every ingredient they mention in your recipe. the recipe can include additional ingredients they didn't mention and, but try not to include too many extra ingredients . Format your response in markdown to make it easier to render to a web page `


const hf = new HfInference("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");

export async function getRecipeFromMistral(ingredientsArr) {

    const ingredientsString = ingredientsArr.join(",")

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                {role : "user", content : `i have ${ingredientsString}. please give me a recipe you recommend i make!`}
            ],
            max_tokens: 1024,
        })

        return response.choices[0].message.content
    } catch (err) {
        console.log(err)
    }
}