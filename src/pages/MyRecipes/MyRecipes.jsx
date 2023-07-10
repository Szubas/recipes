import { Link } from "react-router-dom"
import { MyRecipeList } from "../../components/MyRecipesList/MyRecipeList"

export const MyRecipes = () => {
    return(
        <>
            <Link to="/home" className="Btn">Back</Link>
            <MyRecipeList/>
        </>
    )
}
