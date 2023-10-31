import React, { Component } from 'react'

class LifecycleC extends Component {

    constructor(props){
        super(props);
        this.state = {
            favFood:"Pav Bhaji"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        console.warn("contructor");
    }

    handleSubmit(){
        let food = document.getElementById("textarea1");
        this.setState({favFood:food.value});
    }

    shouldComponentUpdate(nextProps,nextState){
        console.warn("shouldComponentUpdate");
        return this.state.favFood !== nextState.favFood;
    }


    componentDidUpdate(){
        console.warn("componentDidUpdate")
    }

    
  render() {
    console.warn("render");
    return (
      <div>
        <div>My favourite food is {this.state.favFood}</div>
        <label htmlFor="txtA1" style={{ margin: "20px" }}>
          Enter Your Favourite Food
        </label>
        <textarea
          name="txtA1"
          id="textarea1"
          cols="30"
          rows="1"
          style={{ margin: "30px", padding: "10px" }}
        ></textarea>
        <button
          onClick={this.handleSubmit}
          style={{ margin: "20px", padding: "10px" }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default LifecycleC
