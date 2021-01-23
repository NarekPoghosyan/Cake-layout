import React from 'react'
import './Services.scss'

function Services() {
    return (
        <div>
            <div className="services">
                <div className="courier">
                    <div className="car_img"></div>
                    <div className="desc">
                        <div className="description">
                            <p>Доставка в любую</p>
                            <p>точку города</p>
                        </div>
                    </div>
                </div>
                <div className="want_cake">
                    <div className="cake_img"></div>
                    <div className="desc">
                        <div className="description">
                            <p>Собери торт</p>
                            <p>по своему вкусу</p>
                        </div>
                    </div>
                </div>
                <div className="prize">
                    <div className="prize_img"></div>
                    <div className="desc">
                        <div className="description">
                            <p>Получи подарки</p>
                            <p>с каждым заказом</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;