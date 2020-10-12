import React from 'react'
import IncomeItem from './IncomeItem'


function IncomeList({ income, setIncome }) {

    const removeIncome = i => {
        let temp = income.filter((v, index) => index !== i)
        setIncome(temp)
    }
    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div>
            <div className="income-list">
                {
                    income.sort(sortByDate).map((value, index) => (
                        <IncomeItem
                            key={index}
                            income={value}
                            index={index}
                            removeIncome={removeIncome}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default IncomeList
