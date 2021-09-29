import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebase';
import "./Login.css"
import { login } from '../features/userSlice';

function Login() {

    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const loginUser = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            })
            .catch(err => alert(err));

    };
    const registerUser = () => {
        if (!name) {
            alert("Please enter your fullname!");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                });
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src='https://www.position2.com/sites/default/files/imguploads/2014/06/LinkedIn-Builds-on-Content-Marketing-Ad-Tools.png' alt="" />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder="Photo URL (optional)" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

                <button type='submit' onClick={loginUser}>Login</button>
            </form>
            <p onClick={registerUser}>Not a member? <span>Register now</span></p>
        </div>
    )
}

export default Login
