import { Link, useLocation } from "react-router-dom";
import { EditForm } from "../../components/EditForm";

export const EditRecipe = () => {
    const {state} = useLocation();

    return(
        <>
            <Link to="/" className="Btn">Back</Link>
            <h2>Edit Recipe</h2>
            <EditForm id={state.id} title={state.title} type={state.type} igredients={state.igredients} description={state.description}/>
        </>
    );
}
