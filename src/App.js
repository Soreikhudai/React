import React from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const App = () => {
  const expenses = [
    {
      date: new Date(2021, 0, 7),
      title: "Insurance",
      amount: "256"
    },
    {
      date: new Date(2023, 2, 24),
      title: "Medical",
      amount: "500"
    },
    {
      date: new Date(2019, 7, 31),
      title: "clothing",
      amount: "500"
    },
    {
      date: new Date(2019, 2, 1),
      title: "petrol",
      amount: "566"
    }
  ]
  return (

    <div>
      <NewExpense />

      <Expenses items={expenses}></Expenses>

    </div>
  )
}

export default App;
