import { Comments } from '../Comments/Comments'

export const RecipeDetails = (props) => {
    const item = props.item
    return(
        <>
            <h1>Recipe {item.title} Details</h1>
            <h3>Type: {item.type} </h3>
            <h3>Ingredients: {item.ingredients} </h3>
            <h3>Description: {item.description} </h3>
            <Comments recipe={item.id}/>
        </>
    )
}
