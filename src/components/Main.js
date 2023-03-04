import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, About, Membership, Academics, SteppingStrolling, UpcomingEvents, Expansion, IncorporationCharteringProcess } from './pages/index';

const baseURL = '/lpr-website'
const Main = () => {
    return (
        <Routes >
            <Route exact path="/" element={<Home />} />
            <Route path={baseURL+'/'} element={<Home />}></Route>
            <Route path={baseURL+'/about'} element={<About />}></Route>
            <Route path={baseURL+'/membership'} element={<Membership />}></Route>
            <Route path={baseURL+'/academics'} element={<Academics />}></Route>
            <Route path={baseURL+'/stepping-strolling'} element={<SteppingStrolling />}></Route>
            <Route path={baseURL+'/upcoming-events'} element={<UpcomingEvents />}></Route>
            <Route path={baseURL+'/incorporation-chartering-process-and-non-profit'} element={<IncorporationCharteringProcess />}></Route>
            <Route path={baseURL+'/expansion'} element={<Expansion />}></Route>
            {/*<Route path={baseURL+'/expansion'} element={<Expansion />}></Route>
            <Route path={baseURL+'/expansion'} element={<Expansion />}></Route>
            <Route path={baseURL+'/expansion'} element={<Expansion />}></Route>
            <Route path={baseURL+'/expansion'} element={<Expansion />}></Route>
            <Route path={baseURL+'/expansion'} element={<Expansion />}></Route> */}
        </Routes >
    )
}


export default Main