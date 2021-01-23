import React from 'react'
import './Cakes.scss'

function Cakes() {
    return (
        <div className="cakes">
            <div className="cake_one">
                <div>
                    <p>Классические</p>
                </div>
            </div>
            <div className="cake_two">
                <div>
                    <p>Авторские</p>
                </div>
            </div>
            <div className="cake_three">
                <div>
                    <p>Дессерты</p>
                </div>
            </div>
            <div className="cake_fourth">
                <div>
                    <p>Торты на заказ</p>
                </div>
            </div>
        </div>
    )
}

export default Cakes;