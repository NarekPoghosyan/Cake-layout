import React from 'react'
import './CakeOfTheDay.scss'

function CakeOfTheDay() {
    return (
        <div className="cakeOfTheDay">
            <div className="cake_block">
                <div className="sweet">
                    <div className="cake_today">Торт дня</div>
                    <div className="slack"></div>
                </div>
                <div className="cake"></div>
                <button>Заказать сейчас</button>
            </div>
        </div>
    )
}

export default CakeOfTheDay;