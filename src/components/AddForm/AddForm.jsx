import "./AddForm.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const AddForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        axios.post('https://recipes-af2a2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', data)
        .then((response) => {
            navigate("/")
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h3>Add Recipe Form</h3>
            <div className="formContent">
                <input {...register("title")} type="text" placeholder="Recipe name"/>
                <input {...register("type")} type="text" placeholder="Recipe type"/>
                <textarea {...register("ingredients")} placeholder="Recipe ingredients"/>
                <textarea {...register("description")} placeholder="Recipe description"/>
            </div>
            <input type="submit" value="Add recipe" className="Btn"/>
        </form>
    )
}
