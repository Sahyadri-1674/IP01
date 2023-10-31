import React, { Component } from 'react'

class LifecycleE extends Component {

    constructor(props){
        super(props);
        this.state = {
            show:true
        }
        this.handleDel = this.handleDel.bind(this);
    }

    handleDel(){
        this.setState({show:false});
    }


  render() {
    let myheader;
    if(this.state.show){
        myheader = <Child/>
    }
    return (
      <div>
        {myheader}
        <h3>This is the main component.</h3>
        <button onClick={this.handleDel}>Delete Child Component.</button>
      </div>
    )
  }
}

class Child extends Component {

    componentWillUnmount(){
        console.log("The Child component is going to be unmounted.")
    }
    render(){
        return(
            <div>
                This is a Child Component.
            </div>
        )
    }
}

export default LifecycleE
