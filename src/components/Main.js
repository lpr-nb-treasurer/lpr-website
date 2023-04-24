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
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/about'} element={<About />}></Route>
            <Route path={'/membership'} element={<Membership />}></Route>
            <Route path={'/academics'} element={<Academics />}></Route>
            <Route path={'/stepping-strolling'} element={<SteppingStrolling />}></Route>
            <Route path={'/upcoming-events'} element={<UpcomingEvents />}></Route>
            <Route path={'/incorporation-chartering-process-and-non-profit'} element={<IncorporationCharteringProcess />}></Route>
            <Route path={'/expansion'} element={<Expansion />}></Route>
            <Route path={'/brothers/founding-chapter'} element={<FoundingChapter />}></Route>
            <Route path={'/brothers/active-house'} element={<ActiveChapter />}></Route>
            <Route path={'/brothers/alumni-chapter'} element={<AlumniChapter />}></Route>
            <Route path={'/brothers/executive-board'} element={<ExecutiveBoard />}></Route>
            <Route path={'/brothers/national-board'} element={<NationalBoard />}></Route>
            <Route path={'/philanthropy/local'} element={<PhilanthropyLocal />}></Route>
        </Routes >
    )
}


export default Main