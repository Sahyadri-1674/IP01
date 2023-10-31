import React, { Component } from 'react'

 class Refs1 extends Component {

    constructor(){
        super()
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        if(this.cbRef){
        this.cbRef.focus();
        }
        console.log("cbRef",this.cbRef);
        // this.inputRef.current.focus();
        console.log("inputRef",this.inputRef);
    }

    clickHandler(){
        // alert(this.cbRef.value);
        alert(this.inputRef.current.value);
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef} />
        <button onClick={()=>this.clickHandler()}>Click Me</button>
      </div>
    )
  }
}

export default Refs1
