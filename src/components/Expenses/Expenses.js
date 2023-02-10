import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                <ExpensesChart expenses={filterExpenses}/>

                <ExpenseList items={filterExpenses} />

            </Card>

        </li>
    )
}
export default Expenses;

