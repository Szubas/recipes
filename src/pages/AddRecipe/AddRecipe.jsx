import { AddForm } from "../../components/AddForm";
import { Link } from "react-router-dom";

export const AddRecipe = () => {
    return(
        <>
            <Link to="/home"  className="Btn">Back</Link>
            <AddForm />
        </>
    );
}
