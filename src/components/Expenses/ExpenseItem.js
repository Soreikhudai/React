import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
const ExpenseItem = (props) => {
    return (
        <Card className="main">
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2 className="expense-title">{props.title}</h2>
            <div className="amount">${props.amount}</div>
        </Card>
    )
}
export default ExpenseItem;