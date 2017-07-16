import React from 'react'
import GridOption from '../components/GridOption.jsx'


const options = [
  {id:1, name:'phone', size:3, colour:'yellow', image:'images/phone.png'},
  {id:2, name:'mouse', size:1, colour:'grey', image:'images/mouse.png'},
  {id:3, name:'apple', size:2, colour:'red', image:'images/apple.png'},
  {id:4, name:'frog', size:2, colour:'green', image:'images/frog.png'},
  {id:5, name:'cat', size:5, colour:'grey', image:'images/cat.jpg'},
  {id:6, name:'pot', size:4, colour:'blue', image:'images/pot.png'},
  {id:7, name:'elephant', size:8, colour:'grey', image:'images/elephant.png'},
  {id:8, name:'glider', size:13, colour:'green', image:'images/glider.png'},
  {id:9, name:'bike', size:7, colour:'blue', image:'images/bike.png'},
  {id:10, name:'tree', size:8, colour:'green', image:'images/tree.png'},
  {id:11, name:'car', size:6, colour:'red', image:'images/car.png'},
  {id:12, name:'Bus', size:10, colour:'yellow', image:'images/bus.png'},
  {id:13, name:'guitar', size:6, colour:'blue', image:'images/guitar.png'},
  {id:14, name:'toadstool', size:2, colour:'red', image:'images/toadstool.jpg'},
  {id:15, name:'balloon', size:4, colour:'yellow', image:'images/balloon.jpg'},
]
  
const winningSeletion = options[Math.floor(Math.random() * options.length)];
const hintBox = {id:16, name:"hintBox", image:'images/help.png'}



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
      <GridOption win={this.state.win} obj={options[9]}/>
      <GridOption win={this.state.win} obj={options[10]}/>
      <GridOption win={this.state.win} obj={options[11]}/>
      <GridOption win={this.state.win} obj={options[12]}/>
      <GridOption win={this.state.win} obj={options[13]}/>
      <GridOption win={this.state.win} obj={options[14]}/>
      <GridOption win={this.state.win} obj={hintBox}/>

      



    


  


      <h3> Take a guess! </h3>
      <h3 id = "clue"> </h3>
      <h3 id = "counter"> </h3>

    </div>

  </div>

)
}


};

export default GameContainer;