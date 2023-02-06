import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      location: "Viewland",
      amount: 700,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e2",
      title: "toilet Paper",
      location: "Viewland",
      amount: 600,
      date: new Date(2021, 3, 24)
    },
    {
      id: "e3",
      title: "clothes",
      location: "moreh",
      amount: 500,
      date: new Date(2021, 6, 18)
    },
    {
      id: "e4",
      title: "food",
      location: "delhi",
      amount: 190,
      date: new Date(2021, 6, 6)
    }

  ]
  for (let i = 0; i < expenses.length; i++) {
    return (
      <div>
        <ExpenseItem
          title={expenses[0].title}
          location={expenses[0].location}
          amount={expenses[0].amount}
          date={expenses[0].date}>
        </ExpenseItem>

        <ExpenseItem
          title={expenses[1].title}
          location={expenses[1].location}
          amount={expenses[1].amount}
          date={expenses[1].date}>
        </ExpenseItem>

        <ExpenseItem
          title={expenses[2].title}
          location={expenses[2].location}
          amount={expenses[2].amount}
          date={expenses[2].date}>
        </ExpenseItem>

        <ExpenseItem
          title={expenses[3].title}
          location={expenses[3].location}
          amount={expenses[3].amount}
          date={expenses[3].date}>
        </ExpenseItem>

      </div>
    );
  }
}

export default App;
