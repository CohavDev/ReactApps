import React from "react"
import TotalSummaryHeader from "./TotalSummaryHeader"
import data from "../data/data.json"

function Header (){
    let total = 0
    fetch('../data/data.json')
  .then(response => {
    return response.json()
  }).then(data => {
    total = data.total;
  })//what is this?
  
    return(
        <div>
            <TotalSummaryHeader total = {data.total}/>
        </div>
    )
}
export default Header