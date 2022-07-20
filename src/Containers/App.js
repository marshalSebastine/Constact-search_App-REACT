import React, {useState, useEffect} from 'react'
import CardsArray from '../Components/CardArray'
import SearchBox from '../Components/SearchBox'
import Scroll  from '../Components/Scroll.js'
import ErrorBoundary from '../Components/ErrorBoundary.js'


function App(){
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         search: ''
    //     }
    // }
    const [robots,setRobots] = useState([])
    const [search,setSearch] = useState('')
    function onSearchChange(event){

        // this.setState({search: event.target.value})
        setSearch(event.target.value)
    }
    // componentDidMount(){

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => {return response.json()})
    //     .then(users => {this.setState({robots: users})})

    // }
    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( response => {return response.json()})
        .then( users => {setRobots(users)})
     },[]);
    
    // render(){
    //     const {robots,search} = this.state
    //     const filteredrobots = robots.filter(robot => {
    //         return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
    //     }
    //         )
    //     if (this.state.robots.length === 0){
    //         return(<h1 className='tc grow'>Loading...</h1>)
    //     }else{
    //     return(
            
    //         <div className='tc' >
    //         <h1> RoBo-Friends</h1>
    //         <SearchBox searchchange = {this.onSearchChange}/>
    //         <Scroll>
    //             <ErrorBoundary>
    //               <CardsArray robots = {filteredrobots}/>
    //             </ErrorBoundary>

    //         </Scroll>
            
    //         </div>
    //     )}
    // }

        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase())
        }
            )
        if (robots.length === 0){
            return(<h1 className='tc grow'>Loading...</h1>)
        }else{
        return(
            
            <div className='tc' >
            <h1> RoBo-Friends</h1>
            <SearchBox searchchange = {onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                  <CardsArray robots = {filteredrobots}/>
                </ErrorBoundary>

            </Scroll>
            
            </div>
        )}

}
export default App