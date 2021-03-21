import React from 'react'
import "./students.css";
import "./App.css";

class AboutDevs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        students: [
          { id: 1, name: "Sawyer Carroll", age: 36, email: "sawyercarroll@gmail.com" },
          { id: 2, name: "Scott Storey", age: 26, email: "example@gmail.com" },
          { id: 3, name: "Steve Nicksic", age: 26, email: "eample@gmail.com" },
          { id: 4, name: "Shawn Christy", age: 26, email: "example@gmail.com" },
          { id: 5, name: "Wade LaCour", age: 26, email: "wade.lacour@gmail.com"}
        ]
      };
    }
  
    renderTableHeader() {
      let header = Object.keys(this.state.students[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  
    renderTableData() {
      return this.state.students.map((student, index) => {
        const { id, name, age, email } = student; //destructuring
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
          </tr>
        );
      });
    }
  
    render() {
      return (
        <div>
          <h1 id="title">Contact Info!</h1>
          <table id="students">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      );
    }
  }
  export default AboutDevs;