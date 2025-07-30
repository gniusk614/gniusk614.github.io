import React from 'react';
import '../styles/TopSection.css';

const MapSection = () => (
    <div className="map-section">
        <p>오시는 길</p>
        <img src="/map-inner.jpg" alt="약도" className="map-img" />
        <div className="map-note-section">
            <p className="map-note">세류역에서 버스 82-1번 (수원버스터미널 하차) / 도보시 15분</p>
            <p className="map-note">수원역 6번출구에서 버스 환승 (수원버스터미널 하차)</p>
            <p className="map-note">분당선 망포역 하차 4번출구에서 버스 환승 (수원버스터미널 하차)</p>
        </div>
    </div>
);

export default MapSection;
