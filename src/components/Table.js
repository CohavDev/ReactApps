import React from "react"

function Table (props){
    return (
        <div>
            <table className = "table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Buisness Name</th>
                        <th scope="col">Value</th>
                        <th scope="col">Precentage Left</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cell}
                </tbody>
            </table>
        </div>
    )
}
export default Table