import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)

    }
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                    />
                ))}

            </Card>
        </div>


    )

}
export default Expenses;