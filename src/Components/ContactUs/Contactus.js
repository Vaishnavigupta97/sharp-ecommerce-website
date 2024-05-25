import CompHeader from "../CommonComp/CompHeader";
import Compnavbar from "../CommonComp/Compnavbar";
import classes from "./Contact.module.css";
import { useState } from "react";

const Contactus = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


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

        setIsLoading(true);
        let url;
        if(isLogin){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMFbrxc5lSXe_gUqdPMA0uH9hrJY5XSNE'
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMFbrxc5lSXe_gUqdPMA0uH9hrJY5XSNE'
            fetch(url,
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
                setIsLoading(false);
                if(res.ok){
                    return res.json();
                }else{
                    return res.json().then((data) =>{
                        let errorMessage = 'Authantication failed';
                        // if(data && data.error && data.error.message){
                        //      errorMessage = data.error.message;
                        // }
                        // alert(errorMessage);
                        throw new Error(errorMessage)
                        // console.log(data);
                    })
                }
            }).then(data => {
                console.log(data)
            }).catch(err => {
                alert(err.message);
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
                {!isLoading && <button>{isLogin ? 'Login' : 'create Account'}</button>}
                {isLoading && <p>Sending request....</p>}
                <button type="submit" onClick={switchAuthModeHandler}>{isLogin ? 'Create new account' : 'Login with existing account'}</button>
            </div>
        </form>
        </>
    )
}

export default Contactus;