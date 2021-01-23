import React from 'react'

function TitleBar() {
    return (
        <div>
            <div className="titlebar">
                <div className="categories">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="logo"></div>
                <div className="menu">
                    <div>
                        <a href="/">контакты</a>
                        <a href="/">корзина (0)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;