import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className="about">
            <div className="tort_img"></div>
            <div className="about_text">
                <p className="text_one">Здесь есть</p>
                <p className="text_two">все твои</p>
                <p className="text_three">любимые</p>
                <p className="text_fourth">торты</p>
                <button>Заказать</button>
                <div className="section">
                    <div className="slack_1"></div>
                    <p>Выбери раздел</p>
                </div>
            </div>
        </div>
    )
}

export default About;