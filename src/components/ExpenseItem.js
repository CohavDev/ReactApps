import React from "react"
function ExpenseItem(props){
    return(
            <tr className = "Expense-item">
                <th scope="row">{props.id}</th>
                <td>{props.buisnessName}</td>
                <td>{props.value}$</td>
                <td>{props.precLeft}% </td>
                <td>
                    <button onClick = {()=>props.deleteFunction(props.id,"expense")}>Delete</button>
                </td>
            </tr>
    )
}
export default ExpenseItem