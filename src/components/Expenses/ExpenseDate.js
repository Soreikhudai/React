import React from 'react'
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: 'long' })
    const day = props.date.toLocaleString("en-US", { day: '2-digit' })
    const year = props.date.getFullYear();
    return (
        <div className="date">
            <div className="ex-month">{month}</div>
            <div className="ex-day">{day}</div>
            <div className="ex-year">{year}</div>
        </div>
    )
}
export default ExpenseDate;