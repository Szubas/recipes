import { AddForm } from "../../components/AddForm";
import { Link } from "react-router-dom";

export const AddRecipe = () => {
    return(
        <>
            <Link to="/"  className="Btn">Back</Link>
            <AddForm />
        </>
    );
}
