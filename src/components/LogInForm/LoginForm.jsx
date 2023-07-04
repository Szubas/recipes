import { Link } from "react-router-dom";

export const LoginForm = () => {
    return(
        <>
            <form className="form">
                <h1>Log in</h1>
                <div>
                    <label>Login: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password"/>
                </div>
                <input type="submit" className="Btn" value="Log in"/>
                <Link to="/register"><input type="button" className="Btn" value="Register"/></Link>
            </form>
        </>
    );
}
