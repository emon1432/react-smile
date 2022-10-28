import React, { Component } from "react";

class Name extends Component {
  state = {
    friends: [
      { name: "Priyanka", age: 32 },
      { name: "Aleam", age: 35 },
      { name: "Adhora", age: 37 },
      { name: "Emon", age: 40 },
    ],
  };
  render() {
    return (
      <div>
        <h3>
          Name : {this.state.friends[0].name} & Age :{" "}
          {this.state.friends[0].age}
        </h3>
        <h3>
          Name : {this.state.friends[1].name} & Age :{" "}
          {this.state.friends[1].age}
        </h3>
        <h3>
          Name : {this.state.friends[2].name} & Age :{" "}
          {this.state.friends[2].age}
        </h3>
        <h3>
          Name : {this.state.friends[3].name} & Age :{" "}
          {this.state.friends[3].age}
        </h3>
      </div>
    );
  }
}

export default Name;
