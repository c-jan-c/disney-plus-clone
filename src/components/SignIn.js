import React from "react";
import './SignIn.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth, provider} from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';
import {selectUserName, selectUserPhoto, setSignoutState, setUserLoginDetails} from '../features/user/userSlice';
import { useEffect } from "react";


function SignIn(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const setEmailUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.email,
            email: user.email,
            photo: ''
        }))
    }

    const handleStateChange = () => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setEmailUser(user)
                navigate('/home')
            }
        })
    }

    useEffect(() => {
        handleStateChange();
    }, [username])


    const registerUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            if(result){
                setEmailUser(result.user);
                navigate('/home', {replace:true})
            }
        })
        .catch((err) => alert(err.message))
    }


    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.name,
            email: user.email,
            photo: user.photoURL,
        }))
    }


    const handleAuth = () => {
        if(!username){
            signInWithEmailAndPassword(auth, email, password).then((result) => {
            setEmailUser(result.user);
            })
            .catch((err) => {
                alert(err)
            })
        } else {
            console.log('Something went wrong')
        }
    }


    return(
        <div className="signIn">
            <div className="signIn__border">
                <Link to='/'>
                    <img className="signIn__logo" src="/images/logo.svg" alt=""/>
                </Link>
                <h1>Sign In</h1>
                <div className="signIn__content">
                    <div className="signIn__form">
                        <h4>E-Mail</h4>
                        <input onChange={event => setEmail(event.target.value)} className="signIn__formInput" type='text'></input>
                        <h4>Password</h4>
                        <input onChange={event => setPassword(event.target.value)} className="signIn__formInput" type='password'></input>
                        <button className="signIn__formButton" onClick={handleAuth} >Sign In</button>
                    </div>
                </div>
            </div>
            <p>Don't have an account?</p>
            <button className="signIn__formButton register" onClick={registerUser} >Register</button>
            <div className="signIn__background"></div>
        </div>
    )
}

export default SignIn;