import React from 'react'
import './BestSellers.scss'

function BestSellers() {
    return (
        <div className="bestsellers">
            <p className="best">Бестселлеры</p>
            <div className="collection">
                <button>&lt;</button>
                <div className="card">
                    <div className="cake_img_one"></div>
                    <p>Морковный</p>
                    <p className="money">1350 руб.</p>
                    <div className="card_footer">
                        <div className="group_human">

                        </div>
                        <div>
                            <p className="man">1 - 2 чел</p>
                            <div className="shape"></div>
                        </div>
                        <div className="basket"></div>
                    </div>
                </div>
                <div className="card">
                    <div className="cake_img_two"></div>
                    <p>Шоколадный</p>
                    <p className="money">1350 руб.</p>
                    <div className="card_footer">
                        <div className="group_human">

                        </div>
                        <div>
                            <p className="man">1 - 2 чел</p>
                            <div className="shape"></div>
                        </div>
                        <div className="basket"></div>
                    </div>
                </div>
                <div className="card">
                    <div className="cake_img_three"></div>
                    <p>Маленькая девочка</p>
                    <p className="money">1350 руб.</p>
                    <div className="card_footer">
                        <div className="group_human">

                        </div>
                        <div>
                            <p className="man">1 - 2 чел</p>
                            <div className="shape"></div>
                        </div>
                        <div className="basket"></div>
                    </div>
                </div>
                <div className="card">
                    <div className="cake_img_fourth"></div>
                    <p>Фруктовый</p>
                    <p className="money">1350 руб.</p>
                    <div className="card_footer">
                        <div className="group_human">

                        </div>
                        <div>
                            <p className="man">1 - 2 чел</p>
                            <div className="shape"></div>
                        </div>
                        <div className="basket"></div>
                    </div>
                </div>
                <div className="card">
                    <div className="cake_img_five"></div>
                    <p>Шоколадный</p>
                    <p className="money">1350 руб.</p>
                    <div className="card_footer">
                        <div className="group_human">

                        </div>
                        <div>
                            <p className="man">1 - 2 чел</p>
                            <div className="shape"></div>
                        </div>
                        <div className="basket"></div>
                    </div>
                </div>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default BestSellers;