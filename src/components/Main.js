import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { 
    Home, 
    About,
    Membership, 
    Academics, 
    SteppingStrolling, 
    UpcomingEvents, 
    Expansion, 
    IncorporationCharteringProcess,
    FoundingChapter,
    ActiveChapter,
    ExecutiveBoard,
    AlumniChapter,
    NationalBoard,
    PhilanthropyLocal
} from './pages/index';

const Main = () => {
    return (
        <Routes >
            <Route exact path="/" element={<Home />} />
            <Route exact path={'/about'} element={<About />}></Route>
            <Route exact path={'/membership'} element={<Membership />}></Route>
            <Route exact path={'/academics'} element={<Academics />}></Route>
            <Route exact path={'/stepping-strolling'} element={<SteppingStrolling />}></Route>
            <Route exact path={'/upcoming-events'} element={<UpcomingEvents />}></Route>
            <Route exact path={'/incorporation-chartering-process-and-non-profit'} element={<IncorporationCharteringProcess />}></Route>
            <Route exact path={'/expansion'} element={<Expansion />}></Route>
            <Route exact path={'/brothers/founding-chapter'} element={<FoundingChapter />}></Route>
            <Route exact path={'/brothers/active-house'} element={<ActiveChapter />}></Route>
            <Route exact path={'/brothers/alumni-chapter'} element={<AlumniChapter />}></Route>
            <Route exact path={'/brothers/executive-board'} element={<ExecutiveBoard />}></Route>
            <Route exact path={'/brothers/national-board'} element={<NationalBoard />}></Route>
            <Route exact path={'/philanthropy/local'} element={<PhilanthropyLocal />}></Route>
        </Routes >
    )
}


export default Main