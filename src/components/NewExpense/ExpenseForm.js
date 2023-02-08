import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [changedTitle, setChangeTitle] = useState("")
    const [changedAmount, setChangedAmount] = useState("")
    const [changedDate, setChangedDate] = useState("")

    const titleChangeHandler = (event) => {
        setChangeTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setChangedAmount(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setChangedDate(event.target.value)
    }

    return (
        <form>
            <div className="new-expense-controls">

                <div className="new-expense-control">
                    <label>Title:</label>
                    <input type="text" className="input-form" id="expense-name" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense-control">
                    <label>Amount:</label>
                    <input type="number" min="0.01" max="0.01" className="input-form" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense-control">
                    <label>Date:</label>
                    <input type="date" min="2019-01-01" max="2022-11-31" className="input-form" onChange={dateChangeHandler}/>
                </div>

                <div className="new-expense-actions">
                    <button type="submit" className="btn">Add Expense</button>
                </div>

            </div>
        </form>
    )
}
export default ExpenseForm;