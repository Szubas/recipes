import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";

export const Register = () => {
    return (
        <>
            <Link to="/"><input type="button" className="Btn" value="Back to log in" /></Link>
            <RegisterForm />
        </>
    );
}
