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
    const winScreen = document.getElementById("win")
    const clue = document.getElementById("clue")


    if (this.props.obj.id == this.props.win.id) 
      {winScreen.innerText = "YOU FOUND ME!!!";}

    if (this.props.obj.size > this.props.win.size) 
      {clue.innerText ="I am smaller than that."}
    if (this.props.obj.size < this.props.win.size) 
      {clue.innerText ="I am bigger than that"}
    if (this.props.obj.name != this.props.win.name
       && this.props.obj.size == this.props.win.size) 
      {clue.innerText ="I am about the same size as that"}

    
    if (this.props.obj.colour != this.props.win.colour ) 
      {clue.innerText ="I am a different colour"}

    if (this.props.obj.id == 16) 
      {clue.innerText ="I am " + this.props.win.colour }

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
