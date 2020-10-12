import React from 'react'

function Header({ totalIncome }) {
    return (
        <div>
            <header>
                <h1>Total Income</h1>
                <div className="total-income">${totalIncome}</div>
            </header>
            <hr></hr>
        </div>
    )
}

export default Header
