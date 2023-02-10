import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />

                <ExpenseList items={filterExpenses} />

            </Card>
        </div>

    )

}
export default Expenses;

