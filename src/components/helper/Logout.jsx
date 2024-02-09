import React from 'react'
import { accessTokenApi } from "../context/AccessTokenContext";


const logoutFunction =()=>{
    console.log('hello');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    alert('logged out')
}

export default logoutFunction;