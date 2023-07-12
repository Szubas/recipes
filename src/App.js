import "./App.css";
import { AllRecipes } from "./pages/AllRecipes"
import { AddRecipe } from "./pages/AddRecipe"
import { EditRecipe } from "./pages/EditRecipe"
import { Routes, Route, Link } from "react-router-dom";
import { Details } from "./pages/Details/Details";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";
import { MyRecipes } from "./pages/MyRecipes";
import { useEffect, useState } from "react";
import { AuthWrapper } from "./components/AuthWrapper";

function App() {
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

  return (
    <div className="App">
      <div className="Header">
        <h1>Recipes</h1>
      </div>
      {
        userLogged !== null && <Link to='/' className="loguot_btn Btn" onClick={logOut}>Log out</Link>
      }
      <div className="Content">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AuthWrapper />}>
            <Route path="/home" element={<AllRecipes />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/editrecipe" element={<EditRecipe />} />
            <Route path="/details" element={<Details />} />
            <Route path="/myrecipes" element={<MyRecipes />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
