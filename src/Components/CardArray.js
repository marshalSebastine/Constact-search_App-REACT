
import React  from "react"
import Card from "./Cards"

const CardsArray = ({robots}) => {




    return(
        <div>  
        {

        robots.map((user,index) => 
        {return (<Card key = {index} id = {user.id}  name = {user.name} mail = {user.mail}></Card>)})

        }
        </div>

        )

}
export default CardsArray