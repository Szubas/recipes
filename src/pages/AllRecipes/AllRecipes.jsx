import "./AllRecipes.css";
import { AllRecipesList } from "../../components/AllRecipesList/AllRecipesList";
import { Link } from "react-router-dom";

export const AllRecipes = () => {
    return(
        <>
            <Link to="/addrecipe"  className="Btn">Add New</Link>
            <AllRecipesList />
        </>
    );
}
