import "./AllRecipesList.css"
import { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import axios from 'axios'
import { Link } from "react-router-dom"

const PER_PAGE = 8;

export const AllRecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const pageCount = Math.ceil(recipes.length / PER_PAGE);
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


    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    useEffect(() => {
        getRecipes()
    }, []);

    return (
        <>
            <h2>All Recipes List</h2>
            <input type='text' placeholder="search by recipe name" onChange={(e) => setSearch(e.target.value)} />
            <div>
                {
                    recipes
                        .filter((item => {
                            return search.toLowerCase() === ''
                                ? item
                                : item.title.toLowerCase().includes(search);
                        }))
                        .slice(offset, offset + PER_PAGE)
                        .map((item, id) => (
                            <>
                                <div key={id} className="item">
                                    <div>{item.title}</div>
                                    <div>{item.type}</div>
                                    <div className="item_btns">
                                        <Link to="/details" state={{ title: item.title, type: item.type, igredients: item.ingredients, description: item.description }}><button className="Btn">Details</button></Link>
                                    </div>
                                </div>
                            </>
                        ))
                }
            </div>
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
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
