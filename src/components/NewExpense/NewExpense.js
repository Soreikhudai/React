import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const enteredExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    };
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} className="editBtn">Add New Expense</button>}
            {isEditing && <ExpenseForm onEnteredExpenseData={enteredExpenseDataHandler}
                onCancel={stopEditingHandler} />}
        </div>
    )
}
export default NewExpense;