import React from "react"
class AddExpenseForm extends React.Component{
    constructor(){
        super()
        this.state = {
            id:"",
            value:"",
            precLeft:"",
            buisnessName:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        //add data to table...
        const item = {...(this.state)}
        this.props.addFunction(item,"expense")
        document.getElementById("form").reset()
        this.setState(
            {id:"",
            value:"",
            precLeft:"",
            buisnessName:""}
        )
        
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value})

    }
    render(){
        return(
            <div>
                <form id="form" onSubmit = {this.handleSubmit}>
                    <input type = "text" name = "buisnessName" placeholder = "Buisness Name" onChange={this.handleChange}/>
                    <input type = "text" name = "value" placeholder = "Value" onChange={this.handleChange}/>
                    <input type = "text" name = "id" placeholder="id" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddExpenseForm