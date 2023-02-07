import Expenses from './components/Expenses/Expenses'
import ExpenseItem from './components/Expenses/ExpenseItem'
const App = () =>{
  const expenses = [
    {
      date: new Date(2021, 0, 7),
      title: "car insurance",
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

      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;
