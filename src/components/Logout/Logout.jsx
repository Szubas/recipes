import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Logout = () => {
    const [userLogged, setUserLogged] = useState(
        localStorage.getItem("Uid")
      );
    
      useEffect(() => {
        localStorage.setItem("Uid", userLogged);
      }, []);
    
      const logOut = () => {
        localStorage.clear()
        setUserLogged(false)
      }

    return(
        <>
            {
                userLogged !== null && <Link to='/' className="loguot_btn Btn" onClick={logOut}>Log out</Link>
            }
        </>
    )
}
