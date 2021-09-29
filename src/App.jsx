import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './components/Feed';
import { auth } from './firebase/firebase';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ?
        (<Login />) :
        (
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <div className="app__widgets">
              <Widget avatar="https://www.marketplace.org/wp-content/uploads/2021/02/20210128_Keatley-Bill_Gates_0068_R-crop.jpg?fit=2880%2C1620" fullname="Bill Gates" description="Co-chair, Bill & Melinda Gates Foundation" />
              <Widget avatar="https://pbs.twimg.com/profile_images/1257396956881498114/Fj13PSh-_400x400.jpg" fullname="Tony Robbins" description="American author" />
              <Widget avatar="https://i.insider.com/5e3b227bd9db1d415225a007?width=598&format=jpeg" fullname="Ryan Roslansky" description="CEO at LinkedIn" />
              <Widget avatar="https://media.vanityfair.com/photos/5dc42ef3541d8400080ab590/master/pass/GettyImages-1179797765.jpg" fullname="Reed Hastings" description="CEO Netflix" />
            </div>
          </div>
        )}

    </div>
  );
}

export default App;
