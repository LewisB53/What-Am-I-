import React from 'react'
import GridOption from '../components/GridOption.jsx'


const options = [
  {id: 1, name: 'Bus', size:10, colour: 'Yellow', image: 'images/bus.png'},
  {id: 2, name: 'phone', size:3, colour: 'Yellow', image: 'images/phone.png'},
  {id: 3, name: 'car', size:6, colour: 'Red', image: 'images/car.png'},
  {id: 4, name: 'apple', size:2, colour: 'Red', image: 'images/apple.png'},
  {id: 5, name: 'cat', size:5, colour: 'Grey', image: 'images/cat.jpg'},
  {id: 6, name: 'elephant', size:8, colour: 'Grey', image: 'images/elephant.png'},
  {id: 7, name: 'mouse', size:1, colour: 'Grey', image: 'images/mouse.png'},
  {id: 8, name: 'toadstool', size:2, colour: 'Red', image: 'images/toadstool.jpg'},
  {id: 9, name: 'balloon', size:4, colour: 'Yellow', image: 'images/balloon.jpg'}
]
  
const winningSeletion = options[Math.floor(Math.random() * options.length)];
class GameContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      options:options,
      win: winningSeletion
    }
    console.log(this.state.win)

  }

render(){

return (
  <div id= "gameBoard">
    <div id = "grid-wrapper"> 
      <h3 id = "heading"> What am I? </h3>
      <GridOption win={this.state.win} obj={options[0]}/>
      <GridOption win={this.state.win} obj={options[1]}/>
      <GridOption win={this.state.win} obj={options[2]}/>
      <GridOption win={this.state.win} obj={options[3]}/>
      <GridOption win={this.state.win} obj={options[4]}/>
      <GridOption win={this.state.win} obj={options[5]}/>
      <GridOption win={this.state.win} obj={options[6]}/>
      <GridOption win={this.state.win} obj={options[7]}/>
      <GridOption win={this.state.win} obj={options[8]}/>
      <h3> Take a guess! </h3>
      <h3 id = "clue"> </h3>
      <h3 id = "counter"> </h3>

    </div>

  </div>

)
}


};

export default GameContainer;