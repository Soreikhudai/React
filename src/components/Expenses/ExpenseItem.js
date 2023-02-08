import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle("updated")
        console.log(title)
    }
    return (
        <Card className="main" id="card">
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2 className="expense-title">{title}</h2>
            <div className="amount">${props.amount}</div>
            <button className="btn-2" onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;