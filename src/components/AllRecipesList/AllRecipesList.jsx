import "./AllRecipesList.css"
import { useState, useEffect } from "react"
import axios from 'axios'

export const AllRecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const getRecipes = () => {
        axios.get('https://recipes-af2a2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .then((response) => {
            return response.data;
          })
          .then((data) => {
            const dataRecipes = [];
    
            for (const key in data) {
              const recipe = {
                id: key,
                ...data[key]
              };
    
              dataRecipes.push(recipe);
            }
            setRecipes(dataRecipes);
          });
    }

    
    
    useEffect(() => {
        getRecipes()
    }, []);

    return(
        <>
            <h2>All Recipes List</h2>
            <div>
                {
                    console.log(recipes)
                }
                {   
                    recipes.map((item, id) => (
                        <div key={id} className="item"> 
                            <div>{item.title}</div>
                            <div>{item.type}</div>
                            <button className="Btn">Details</button>
                            <button className="Btn">Delete</button>
                        </div>
                    ))
                }
            </div>  
        </>
    );
}
