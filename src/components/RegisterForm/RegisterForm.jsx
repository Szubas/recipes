import { Link } from "react-router-dom";

export const RegisterForm = () => {
    return(
        <>
            <form className="form">
            <Link to="/login"><input type="button" className="Btn" value="Back to log in"/></Link>
                <h1>Register</h1>
                <div>
                    <label>E-mail: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Login: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password"/>
                </div>
                <input type="submit" className="Btn" value="Log in"/>
            </form>
        </>
    );
}
