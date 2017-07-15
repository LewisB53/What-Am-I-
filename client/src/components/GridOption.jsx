import React from 'react'

class GridOption extends React.Component{

  constructor(props){
    super(props)
    this.state = {
    }
    this.imageClicked = this.imageClicked.bind(this)
  }

  imageClicked(){
    console.log (this.props.obj)
  
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
