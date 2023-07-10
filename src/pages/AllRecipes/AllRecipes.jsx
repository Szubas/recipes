import './AllRecipes.css';
import { AllRecipesList } from "../../components/AllRecipesList/AllRecipesList";
import { Link } from "react-router-dom";

export const AllRecipes = () => {
    const onLogOut = () => {
        localStorage.clear();
    } 
    return (
        <>
            <Link to='/' className="loguot_btn Btn" onClick={onLogOut}>Log out</Link>
            <Link to='/myrecipes' className="myrecipes_btn Btn">My recipes</Link>
            <Link to="/addrecipe" className="Btn">Add New</Link>
            <AllRecipesList />
        </>
    );
}
