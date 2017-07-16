import React from 'react'

class GridOption extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
    this.imageClicked = this.imageClicked.bind(this)
  
      console.log(this.props.win)

  }

  imageClicked(){
  
    if (this.props.obj == this.props.win) 
      {console.log("you win")}
      console.log(this.props.obj.id)

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
