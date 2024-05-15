import { useState } from "react";
import classes from "./StoredForm.module.css";

const StoreForm = () => {
    const [title, setTitle] = useState("");
    const [openText, setOpenText] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const openTextHandler = (event) => {
        setOpenText(event.target.value);
    }
    const releaseDateHandler = (event) => {
        setReleaseDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newMovieObj = {
            title: title,
            text: openText,
            date: releaseDate
        }
        console.log(newMovieObj);
    }
    return (
        <>
            <form onSubmit={submitHandler} className={classes.formParent}>
                <div className={classes.labelParent}>
                    <label><strong>Title</strong></label><br />
                    <input type="text" value={title} onChange={titleHandler} />
                </div>
                <div className={classes.labelParent}>
                    <label><strong>Opening text</strong></label><br />
                    <textarea cols={68} rows={5} value={openText} onChange={openTextHandler} />
                </div>
                <div className={classes.labelParent}>
                    <label><strong>release Date</strong></label><br />
                    <input type="date" value={releaseDate} onChange={releaseDateHandler} />
                </div>
                <div className={classes.submitBtn}>
                <button type="submit">Add Movie</button>
                </div>
            </form>
        </>
    )
}

export default StoreForm;