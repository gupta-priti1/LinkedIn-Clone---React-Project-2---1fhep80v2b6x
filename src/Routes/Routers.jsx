import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MyNetwork from '../pages/MyNetwork'
import Jobs from '../pages/Jobs'
import Messaging from '../pages/Messaging'
import Notifications from '../pages/Notifications'
import SearchDisplay from '../pages/SearchDisplay'
import {RoutesWrapper } from '../components/Styles/Wrapper'

const Routers = () => {
  return (
    <RoutesWrapper>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/feed' element={<Home/>}/>
        <Route path='/mynetwork' element={<MyNetwork/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/messaging' element={<Messaging/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/search/:searchTerm' element={<SearchDisplay/>}/>
    </Routes>
    </RoutesWrapper>
  )
}

export default Routers