import { RecipeDetails } from "../../components/RecipeDetails/RecipeDetails"
import { Link, useLocation } from "react-router-dom"

export const Details = () => {
    const {state} = useLocation();

    return(
        <>
            <Link to="/home" className="Btn">Back</Link>
            <RecipeDetails title={state.title} type={state.type} igredients={state.igredients} description={state.description}/>
        </>
    )
}
