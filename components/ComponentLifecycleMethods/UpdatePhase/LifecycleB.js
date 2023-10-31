import React, { Component } from 'react'


class LifecycleB extends Component {

    constructor(props){
        super(props);
        this.state = {
            color:"red"
        }
        console.warn("LifecycleB constructor");
    }

    componentDidMount(){
      console.warn("LifecycleB componentDidMount")
      setTimeout(()=>{
          this.setState({color:"yellow"})
      },2000)
    }

    shouldComponentUpdate(){
        console.warn("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.warn("getSnapshotBeforeUpdate");
        console.log(prevProps,prevState);
        document.getElementById('div1').innerHTML = "Before Update, the favourite color was " + prevState.color;
        return null;
    }

    componentDidUpdate(){
        console.warn("LifecycleB componentDidUpdate");
        document.getElementById('div2').innerHTML = "After Update, the favourite color is "+ this.state.color;
    }
    
  render() {
    console.warn("LifecycleB render.")
    return (
      <div>
        <div>My favourite color is {this.state.color}.</div>
        <div id="div1"></div>
        <div id='div2'></div>
      </div>
    )
  }
}

export default LifecycleB;
