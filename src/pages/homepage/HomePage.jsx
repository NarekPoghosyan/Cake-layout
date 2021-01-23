import React from 'react'
import Titlebar from './Titlebar/Titlebar'
import About from './About/About'
import Cakes from './Cakes/Cakes'
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="homepage">
            <Titlebar />
            <div className="globus"></div>
            <div className="gl_bg"></div>
            <div className="white_line"></div>
            <div className="mini_globus_one"></div>
            <div className="mini_globus_two"></div>
            <div className="mini_globus_three"></div>
            <div className="mini_globus_fourth"></div>
            <div className="mini_globus_five"></div>
            <div className="mini_globus_six"></div>
            <About />
            <Cakes />
        </div >
    )
}

export default HomePage;