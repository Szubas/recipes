import './Comments.css'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

const PER_PAGE = 5;

export const Comments = (props) => {
    const { register, handleSubmit } = useForm()
    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [text, setText] = useState('')
    const pageCount = Math.ceil(comments.length / PER_PAGE);
    const user = localStorage.getItem("UserMail")
    const currentRecipe = props.recipe

    const onSubmit = (data) => {
        axios.post('https://recipes-af2a2-default-rtdb.europe-west1.firebasedatabase.app/comments.json', data)
            .then((response) => {
                getComments()
                setText('')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getComments = () => {
        axios.get('https://recipes-af2a2-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                const dataComments = [];
                console.log(data)

                for (const key in data) {

                    const comment = {
                        id: key,
                        ...data[key]
                    };
                    if (comment.recipe === currentRecipe) { dataComments.push(comment) }
                }
                setComments(dataComments.reverse());
            });

    }

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    useEffect(() => {
        getComments()
    }, []);

    return (
        <div className="comments">
            <div className="writecomment">
                <form onSubmit={handleSubmit(onSubmit)} className='commentform'>
                    {/* wiem że nie tak ale działa */}
                    <input {...register("user")} value={user} hidden />
                    <input {...register("recipe")} value={props.recipe} hidden />
                    <textarea {...register("text")} value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Write comment" className='commentarea' maxLength={255}/>
                    <input type="submit" value="Add" className='Btn' />
                </form>
            </div>
            <h2>Komentarze:</h2>
            <div className='commentssection'>    
                {
                    comments
                        .map((item) => (
                            <>
                                <div key={item.id} className='comment'>
                                    <p>{item.user}:</p>
                                    <div>{item.text}</div>
                                </div>
                            </>
                        ))
                        .slice(offset, offset + PER_PAGE)
                }
            </div>
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                renderOnZeroPageCount={null}
                breakLabel={".."}
                initialPage={0}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
    );
}
