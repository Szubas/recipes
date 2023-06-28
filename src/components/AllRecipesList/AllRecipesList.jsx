import "./AllRecipesList.css"
import { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import axios from 'axios'
import { Link } from "react-router-dom"

const PER_PAGE = 5;

export const AllRecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

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

    const delRecipe = (id) => {
        axios.delete(`https://recipes-af2a2-default-rtdb.europe-west1.firebasedatabase.app/recipes/${id}.json`)
            .then(response => {
                getRecipes()
            })

    }

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPageData = recipes
        .slice(offset, offset + PER_PAGE)
        .map((item, id) => (
            <>            
                <div key={id} className="item">
                <div>{item.title}</div>
                <div>{item.type}</div>
                <Link to="/details" state={{ title:item.title, type:item.type, igredients:item.ingredients, description:item.description }}> <button className="Btn">Details</button></Link>
                <Link to="/editrecipe" state={{ id:item.id, title:item.title, type:item.type, igredients:item.ingredients, description:item.description }}> <button className="Btn">Edit</button></Link>
                <button onClick={() => { delRecipe(item.id) }} className="Btn">Delete</button>
            </div >
            </>
        ));

const pageCount = Math.ceil(recipes.length / PER_PAGE);

useEffect(() => {
    getRecipes()
}, []);

return (
    <>
        <h2>All Recipes List</h2>
        <div>
            {currentPageData}
        </div>
        <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
    </>
);
}
