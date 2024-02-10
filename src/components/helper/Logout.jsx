import React from 'react'
import { accessTokenApi } from "../context/AccessTokenContext";
import { ToasterMessage } from './ToastHelper';


const logoutFunction =()=>{
    console.log('hello');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    ToasterMessage('success','logged out');
}

export default logoutFunction;