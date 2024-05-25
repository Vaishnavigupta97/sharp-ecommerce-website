import CompHeader from "../CommonComp/CompHeader";
import Compnavbar from "../CommonComp/Compnavbar";
import classes from "./Contact.module.css";
import { useState } from "react";

const Contactus = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwrodhandler = (event) => {
        setPassword(event.target.value)
    }

    async function submitHandler(event){
        event.preventDefault();
        const contactFormObj = {
            name : name,
            email : email,
            password : setPassword
        }
        setName("");
        setEmail("");
        setPassword("");
        console.log(contactFormObj);


        if(isLogin){

        }else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMFbrxc5lSXe_gUqdPMA0uH9hrJY5XSNE',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password : password,
                    returnSecureToken : true
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            }).then(res => {
                if(res.ok){

                }else{
                    return res.json().then((data) =>{
                        let errorMessage = 'Authantication failed';
                        if(data && data.error && data.error.message){
                             errorMessage = data.error.message;
                        }
                        alert(errorMessage);
                        // console.log(data);
                    })
                }
            })
        }



        // const response = await fetch(`https://react-httpthree-default-rtdb.firebaseio.com/contact.json`, {
        //     method: 'POST',
        //     body: JSON.stringify(contactFormObj),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // const data = await response.json();
        // console.log(data);
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
                <label>password</label>
                <input type="password" value={password} onChange={passwrodhandler} />
            </div>
            <div>
                <button>{isLogin ? 'Login' : 'create Account'}</button>
                <button type="submit" onClick={switchAuthModeHandler}>submit</button>
            </div>
        </form>
        </>
    )
}

export default Contactus;