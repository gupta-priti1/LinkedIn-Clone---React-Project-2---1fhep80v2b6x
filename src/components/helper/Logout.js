import { accessTokenApi } from "../context/AccessTokenContext";


export const logoutFunction =()=>{
    const {setAccessToken} = accessTokenApi();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    setAccessToken('');
    alert('logged out')
}