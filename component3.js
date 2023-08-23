import React from "react";
function AdminPanel() {
    return <h3>AdminPanel</h3>
}
function UserPanel() {
    return <h3>UserPanel</h3>
}
class Conditional extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false }
    }
    handlebtnClick = () => {
        this.setState({ isLoggedIn:  this.state.isLoggedIn ? false : true } )
    }
    render() {
        return (
            <>
                {this.state.isLoggedIn ? (<AdminPanel />) : (<UserPanel />)}
                <button onClick={this.handlebtnClick}>Click</button>
            </>
        );
    }
}

export default Conditional;