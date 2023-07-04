import { AllRecipesList } from "../../components/AllRecipesList/AllRecipesList";
import { Link } from "react-router-dom";

export const AllRecipes = () => {
    return (
        <>
            <Link to='/'><button className="loguot_btn Btn">Log out</button></Link>
            <Link to="/addrecipe" className="Btn">Add New</Link>
            <AllRecipesList />
        </>
    );
}
