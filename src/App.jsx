import React, {Component} from 'react';
import './App.css';

import UserInput from './Input/UserInput';
import UserOutput from './Output/UserOutput';

class App extends Component {
    
    state = {
            fruit : 'yourfruit'
        } 
        
    bestFruitHandler = (event)=>{
        this.setState({fruit: event.target.value})
        }

    render(){
       const style = {
        fontSize: '50px'
  
      
       }

        return(
            <div  className= 'App'>
            <button style={style}>btn</button>
                <UserOutput  fruit = {this.state.fruit}/>
                <UserInput  fruitHandler = {this.bestFruitHandler} fruit = {this.state.fruit}/>
            </div>
        

        )

    }
}

export default App;