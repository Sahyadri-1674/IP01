import React,{Component} from 'react';

class LifeCycleD extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:null,
            who:null
        }
        console.warn("Constructor");
    }

    componentDidUpdate(){
        if(this.state.who === null){
            this.setState({who:"Mukesh"});
        }
        console.warn("componentDidUpdate");
    }

    render(){
        console.warn("render");
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={()=>this.setState({active:"update"})}>Click Me!</button>
            </div>
        );
    }
}

export default LifeCycleD;