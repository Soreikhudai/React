import './ExpenseItem.css'
function ExpenseItem(props) {
   
    return (
        <div className="expense-item">
            <div>
                <div className="expense-date">{props.date.toISOString()}</div>
            </div>
            <div>
                <div className="expense-title">{props.title}</div>
            </div>
            <div>
                <div className="expense-location">{props.location}</div>
            </div>
            <div>
                <div className="expense-amount">${props.amount}</div>
            </div>

        </div>
    )
}
export default ExpenseItem;