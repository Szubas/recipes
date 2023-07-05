import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                window.alert(errorMessage);
            });
    }
    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <h1>Register</h1>
                <div className="label_input">
                    <label>First name: </label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required/>
                </div>
                <div className="label_input">
                    <label>Last name: </label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" required/>
                </div>
                <div className="label_input">
                    <label>Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required/>
                </div>
                <div className="label_input">
                    <label>Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/>
                </div>
                <input type="submit" className="Btn" value="Register" />
            </form>
        </>
    );
}
