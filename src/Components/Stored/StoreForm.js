import { useState } from "react";
import classes from "./StoredForm.module.css";

const StoreForm = (props) => {
    const [title, setTitle] = useState("");
    const [openText, setOpenText] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    // const x = props.showProductsArr;
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const openTextHandler = (event) => {
        setOpenText(event.target.value);
    }
    const releaseDateHandler = (event) => {
        setReleaseDate(event.target.value);
    }
    async function submitHandler(event){
        event.preventDefault();
        const newMovieObj = {
            title: title,
            text: openText,
            date: releaseDate
        }
        setTitle("");
        setOpenText("");
        setReleaseDate("");
        // async function addMovieHandler(newMovieObj) {
            const response = await fetch('https://react-http-42444-default-rtdb.firebaseio.com/movies.json', {
                method: 'POST',
                body: JSON.stringify(newMovieObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            props.showProductsArr()
            console.log(data);
        }
        // props.addFormData(newMovieObj);
        // console.log(newMovieObj);
    // }
    return (
        <>
            <form onSubmit={submitHandler} className={classes.formParent}>
                <div className={classes.labelParent}>
                    <label><strong>Title</strong></label><br />
                    <input type="text" value={title} onChange={titleHandler} required />
                </div>
                <div className={classes.labelParent}>
                    <label><strong>Opening text</strong></label><br />
                    <textarea cols={68} rows={5} value={openText} onChange={openTextHandler} required />
                </div>
                <div className={classes.labelParent}>
                    <label><strong>release Date</strong></label><br />
                    <input type="date" value={releaseDate} onChange={releaseDateHandler} required />
                </div>
                <div className={classes.submitBtn}>
                <button type="submit">Add Movie</button>
                </div>
            </form>
        </>
    )
}

export default StoreForm;