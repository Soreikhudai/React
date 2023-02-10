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
    const filterExpenses= props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {filterExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
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