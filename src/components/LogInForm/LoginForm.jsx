import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            window.alert("Wrong email or password! If you don't have account press register button to make new one.")
        });
        
    }
    return(
        <>
            <form className="form">
                <h1>Log in</h1>
                <div className="label_input">
                    <label>Email: </label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="label_input">
                    <label>Password: </label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <input type="submit" onClick={onLogin} className="Btn" value="Log in"/>
                <Link to="/register"><input type="button" className="Btn" value="Register"/></Link>
            </form>
        </>
    );
}
