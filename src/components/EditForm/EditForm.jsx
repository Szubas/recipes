import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const EditForm = (props) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        axios.put(`https://recipes-af2a2-default-rtdb.europe-west1.firebasedatabase.app/recipes/${props.id}.json`, data)
        .then(response => {
            console.log(response);
            navigate("/home")
          })
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h3>Add Recipe Form</h3>
            <div className="formContent">
                <input {...register("title")} type="text" defaultValue={props.title}/>
                <input {...register("type")} type="text" defaultValue={props.type}/>
                <textarea {...register("ingredients")} defaultValue={props.igredients}/>
                <textarea {...register("description")} defaultValue={props.description}/>
            </div>
            <input type="submit" value="Edit recipe" className="Btn"/>
        </form>
    )
}
