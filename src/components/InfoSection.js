import React from 'react';
import '../styles/TopSection.css';

const InfoSection = () => (
    <div className="info-content">
        <div className="baby-photo-wrapper">
            <div className="baby-photo" />
            <img src="/flower.png" alt="꽃 테두리" className="flower-frame" />
        </div>
        <div className="name-section">
            <h1 className="baby-name">루<br/>아<br/></h1>
            <p className="birthday">첫 생일<br/><span className="lunar">견우직녀달, 열사흘</span></p>
            <br/>
            {/*<p className=""><strong>아빠</strong> 강광준 · <strong>엄마</strong> 윤세영</p>*/}
        </div>
        <div className="info-section">
            <p className="date-time">2025년 8월 10일 일요일 낮 3시</p>
            <p className="location">수원 마이어스 베니스홀</p>
            <p className="address">경기 수원시 권선구 경수대로 270 터미널동</p>
        </div>
    </div>
);

export default InfoSection;
