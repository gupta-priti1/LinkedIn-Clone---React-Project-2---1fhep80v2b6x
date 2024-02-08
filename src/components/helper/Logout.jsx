import React from 'react'
import { accessTokenApi } from "../context/AccessTokenContext";


const logoutFunction =()=>{
    const {setAccessToken} = accessTokenApi();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    setAccessToken('');
    alert('logged out')
}

export default logoutFunction;