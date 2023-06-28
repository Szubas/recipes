import './RecipeDetails.css'

export const RecipeDetails = (props) => {
    return(
        <>
            <h1>Recipe {props.title} Details</h1>
            <h3>Type: {props.type} </h3>
            <h3>Igredients: {props.igredients} </h3>
            <h3>Description: {props.description} </h3>
        </>
    )
}
