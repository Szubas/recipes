import "./App.css";
import { AllRecipes } from "./pages/AllRecipes"

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Recipes</h1>
      </div>
      <button className="Btn">Add New</button>
      <div className="Content">
        <AllRecipes />
      </div>
    </div>
  );
}

export default App;
