import React from 'react'

const Card = ({key, id, name, mail }) => {

    return(
        <div className=' ma2 pa3 br3 shadow-5 dib bg-light-green grow tc'>
            <img alt = "robots" src={`https://robohash.org/${id}?size=200x200`}></img>
            <h2>{name}</h2>
            <p>{mail}</p>

        </div>
    )

}
export default Card