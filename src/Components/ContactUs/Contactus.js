import CompHeader from "../CommonComp/CompHeader";
import Compnavbar from "../CommonComp/Compnavbar";
import classes from "./Contact.module.css";
import { useState } from "react";

const Contactus = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const phoneNumHandler = (event) => {
        setPhoneNum(event.target.value)
    }

    async function submitHandler(event){
        event.preventDefault();
        const contactFormObj = {
            name : name,
            email : email,
            phoneNum : phoneNum
        }
        setName("");
        setEmail("");
        setPhoneNum("");
        console.log(contactFormObj);
        const response = await fetch(`https://react-httpthree-default-rtdb.firebaseio.com/contact.json`, {
            method: 'POST',
            body: JSON.stringify(contactFormObj),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
    return(
        <>
        <Compnavbar />
        <CompHeader />
        <form onSubmit={submitHandler}>
            <div className={classes.formLabelInput}>
                <label>Name</label>
                <input type="text" value={name} onChange={nameHandler}/>
            </div>
            <div className={classes.formLabelInput}>
                <label>email-id</label>
                <input type="email" value={email} onChange={emailHandler} />
            </div>
            <div className={classes.formLabelInput}>
                <label>phone-number</label>
                <input type="tel-number" value={phoneNum} onChange={phoneNumHandler} />
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
        </>
    )
}

export default Contactus;