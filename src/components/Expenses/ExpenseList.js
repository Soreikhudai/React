import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found, Kindly select another year</h2>
    }

    else if (props.items.length === 1) {
        
        return  <h2 className="expenses-list__fallback">Only single Expense here. Please add more...
        </h2>
    }


    return <ul className="expenses-list">
        {
            props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            ))
        }
    </ul>
}
export default ExpenseList;
