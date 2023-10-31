import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props){
        //constructor used to set Initial state and bind the event handlers. NOT for http req, api calls.
      super(props);
      this.state = {       
        name: "Prasad",
        count: 0,
      };
      this.handleClick = this.handleClick.bind(this); //This is important otherwise handleClick will not be able to access "this". It will give the error --> Cannot read properties of undefined (reading 'setState')

      //   constructor is called when the component is initiated or created.This is the first method to get executed.
      console.warn("Constructor");
    }

    handleClick(){
        this.setState(prevState => ({
            count:prevState.count +1
        }))
    }

    static getDerivedStateFromProps(props,state){
          console.warn("getDerivedStateFromProps",props,state);
        //   getDerivedStateFromProps is called right before the render method during the initial mounting of the component and also before each re-render
          return {name:props.name}
    }

    componentDidMount(){
        //  It is called once, immediately after the initial rendering of the component. This makes it a suitable place to perform tasks that require access to the DOM, network requests, data fetching, and other side effects.
        console.warn("ComponentDidMount of LifecycleA");
    }
  render() {
    //Render method is executed during initial mounting and each time a state or props gets updated.
    // Parent Component Re-renders and Forced Updates.
    // the render method should be a pure function, meaning it should not have side effects and should only be responsible for rendering the component's UI based on its current props and state. Any side effects, such as data fetching, should be handled in other lifecycle methods, like componentDidMount, componentDidUpdate, or componentWillUnmount, depending on when they should occur in the component's lifecycle.

    console.warn("render");
    return (
      <div>
        <div>
          My name is {this.state.name} and I am from {this.props.branch} branch.
        </div>
        <div>The count is {this.state.count}</div>
        <button onClick={this.handleClick}> Increment </button>
      </div>
    );
  }
}

export default LifecycleA
