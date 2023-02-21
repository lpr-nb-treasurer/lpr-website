import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import History from './pages/History.js';

const Main = () => {
    return (
        <Routes >
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            {/* <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route> */}
        </Routes >
    )
}


export default Main