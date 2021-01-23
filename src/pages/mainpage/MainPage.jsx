import React from 'react'
import BestSellers from './bestsellers/BestSellers'
import CakeOfTheDay from './CakeOfTheDay/CakeOfTheDay'
import Services from './Services/Services'
import './MainPage.scss'

function MainPage() {
    return (
        <div className="mainpage">
            <Services />
            <div className="ellipse"></div>
            <div className="white_ellipse"> </div>
            <div className="white_ellipse_line"></div>
            <CakeOfTheDay />
            <div className="egg"></div>
            <div className="egg_cyrcle"></div>
            <div className="egg_white_cyrcle"></div>
            <BestSellers />
        </div>
    )
}

export default MainPage;