import React from "react"
import ExpenseItem from "./ExpenseItem"
import AddExpenseForm from "./AddExpenseForm"
import Table from "./Table"
class TableContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            //need to connect to data base
            expenseArray : [
                {id:"1",buisnessName:"mcdonalds",value:"100",precLeft:"45"},
                {id:"2",buisnessName:"Vans",value:"200",precLeft:"5"}
            ],
            incomeArray :[]
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    handleData(){
        return this.state.expenseArray.map(item =>{
            const {id,value,precLeft,buisnessName} = item
            return (
            <ExpenseItem 
            key={id} id = {id} value = {value} precLeft = {precLeft} buisnessName = {buisnessName}
            deleteFunction = {this.deleteItem}/>)            
        })
        
    }
    addItem(item,type){
        if(type === "expense")
            this.setState(prevState =>({expenseArray:[...prevState.expenseArray,item]}))
        else
            this.setState(prevState =>({incomeArray:[...prevState.incomeArray,item]}))
    }
    deleteItem(itemId,type){
        console.log("deleting item no."+itemId)
        if(type === "expense")
        {
            this.setState(prevState =>(
                {expenseArray:prevState.expenseArray.filter(item => item.id !== itemId)}))
        }
        else{
            this.setState(prevState =>(
                {incomeArray:prevState.incomeArray.filter(item => item.id !== itemId)}))
        }
    }
    render(){
        const itemsCell = this.handleData()
        return(
        <div className = "Expense-table-form">
            <h2 align = "left">Income</h2>
            
            <h2 align = "left">Expenses </h2>
            <AddExpenseForm addFunction = {this.addItem}/>
            <Table cell = {itemsCell}/>
         </div>
        )
    }
}
export default TableContainer