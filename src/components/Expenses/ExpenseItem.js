import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
const ExpenseItem = (props) => {
    const deleteExpenses = () => {
        console.log("deleted")

    }
    return (
        <Card className="main" id="card">
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2 className="expense-title">{props.title}</h2>
            <div className="amount">${props.amount}</div>
            <button className="btn" onClick={deleteExpenses}>Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem;