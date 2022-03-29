import React from 'react'

const SearchBox = ({searchchange}) => {

    return(
        <div className='pa3 ma3'>

            <input className='pa3 ma2 bg-light-white 'type = 'search' placeholder='Search robots' onChange={searchchange}/>

        </div>
    )
}

export default SearchBox