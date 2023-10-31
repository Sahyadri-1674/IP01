import React, { Component } from "react";
import LifecycleA from "./LifecycleA";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: "IT",
    };
    console.log("Contructor of Parent");
  }

  componentDidMount() {
    console.log("Parent Mounted successfully");
  }

  render() {
    console.log("render of Parent");
    return (
      <div>
        <LifecycleA branch={this.state.branch} name="Pranav" />
        <button onClick={() => this.setState({ branch: "Comps" })}>
          Change Branch
        </button>
      </div>
    );
  }
}

export default Parent;
