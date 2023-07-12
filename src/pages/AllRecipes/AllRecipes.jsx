import './AllRecipes.css';
import { AllRecipesList } from "../../components/AllRecipesList/AllRecipesList";
import { Link } from "react-router-dom";
import { Logout } from '../../components/Logout/Logout';

export const AllRecipes = () => {
    return (
        <>
            <Logout />
            <Link to='/myrecipes' className="myrecipes_btn Btn">My recipes</Link>
            <Link to="/addrecipe" className="Btn">Add New</Link>
            <AllRecipesList />
        </>
    );
}
