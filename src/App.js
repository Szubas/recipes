import "./App.css";
import { AllRecipes } from "./pages/AllRecipes"
import { AddRecipe } from "./pages/AddRecipe"
import { EditRecipe } from "./pages/EditRecipe"
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details/Details";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Recipes</h1>
      </div>
      <div className="Content">
        <Routes>
          <Route path="/" element={<AllRecipes />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/editrecipe" element={<EditRecipe />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<LogIn />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
