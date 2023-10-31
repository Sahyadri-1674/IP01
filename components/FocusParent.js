import React, { Component } from 'react'
import Input from './Input';

class FocusParent extends Component {
    constructor(props){
        super(props);
        this.parentRef = React.createRef();
    }

    clickHandler = () => {
        this.parentRef.current.focusInput();
    }
  render() {
    return (
      <div>
        <Input ref={this.parentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>    
      </div>
    )
  }
}

export default FocusParent
