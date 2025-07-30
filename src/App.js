import React from 'react';
import './App.css';
import TopSection from './components/TopSection';
import InfoSection from './components/InfoSection';
import MapSection from './components/MapSection';
import PhotoSection from "./components/PhotoSection";
import PersonalInfo from "./components/PersonalInfo";

function App() {
    return (
        <div className="App">
            <TopSection/>
            <InfoSection/>
            <PersonalInfo/>
            <PhotoSection/>
            <MapSection/>
        </div>
    );
}

export default App;
