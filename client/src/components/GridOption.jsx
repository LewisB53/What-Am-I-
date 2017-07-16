import React from 'react'

const gameBoard = document.getElementById("gameBoard")
let counter = 0

class GridOption extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
    this.imageClicked = this.imageClicked.bind(this)

  }

  imageClicked(){
    counter ++

    let counterDisplay = document.getElementById("counter")
    const winScreen = document.getElementById("gameBoard")
    const clue = document.getElementById("clue")


    if (this.props.obj.id == this.props.win.id) 
      {winScreen.innerText ="you win" }

    if (this.props.obj.size > this.props.win.size) 
      {clue.innerText ="I am smaller"}
    if (this.props.obj.size < this.props.win.size) 
      {clue.innerText ="I am Bigger"}
  
    
    if (this.props.obj.colour != this.props.win.colour ) 
      {clue.innerText ="I am a different Colour"}

  
    counterDisplay.innerText = " Number of guesses: " + counter
  }


  render (){
      return (
        <div className="item" onClick={ this.imageClicked }>
          <img className='image' src={this.props.obj.image} alt="item" />
        </div>
      )
    }
  }  

export default GridOption
