import { AddForm } from "../../components/AddForm";
import "./AddRecipe.css";
import { Link } from "react-router-dom";

export const AddRecipe = () => {
    return(
        <>
            <Link to="/"  className="Btn">Back</Link>
            <AddForm />
        </>
    );
}
