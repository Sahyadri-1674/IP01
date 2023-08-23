import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {count:0}
    }

    handleClick = () => {
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
           <>
            <h1>You have Clicked {this.state.count} times</h1>
            <button type="button" onClick={this.handleClick}>Click Me</button>
           </> 
        );
    }
}

export default Counter;

//WAP for conditional rendering in react 