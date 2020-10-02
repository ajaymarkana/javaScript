import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* *****Understanding the react elements*****

### creating element with JSX****************
const element = <h1 className="testClass">Welcome to React Programmig..</h1>;

ReactDOM.render(element,document.getElementById("root"));

const newElement = <h1 className="testClass">UnderStanding react element</h1>;

ReactDOM.render(newElement,document.getElementById("root"));

const element=(
  <div className="testClass">
    <h1>Welcome to React...</h1>
    <h1>learning the react element</h1>
  </div>
);

ReactDOM.render(element,document.getElementById("root"));

### creating element without JSX*************


const element=React.createElement("h1",null,"welcome to react");

ReactDOM.render(element,document.getElementById("root"));


const element=React.createElement("div",{className:"testClass"},
React.createElement("h1",null,"welcome to react"),
React.createElement("h1",null,"understanding react")
);

ReactDOM.render(element,document.getElementById("root"));

*/

/*

### Function components***************

var DisplayEmployeeInfo=(employee)=>{
  return <div>
      <h1>Employee Information...</h1>
      <p>
        <label>Employee ID : <b>{employee.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{employee.Name}</b></label>
      </p>
      <p>
        <label>Employee Location : <b>{employee.Location}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{employee.Salary}</b></label>
      </p>
      <Department deptName={employee.deptName} 
      headName={employee.headName}>
      </Department>
    </div>;
}; 

const Department=(deptInfo)=>{
  return <div>
    <p>Dept Name is : <b>{deptInfo.deptName}</b></p>
    <p>Dept Head is : <b>{deptInfo.headName}</b></p>    
  </div>

}

const element = <DisplayEmployeeInfo Id="101"
 Name="Ajay" Location="Rajkot" Salary="120000" 
 deptName="Computer" headName="Abcd">
</DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById("root"));


*/

class Employee extends React.Component{
  render(){
    return <div>
        <h2>Employee Details....</h2>
        <p>
          <label>Employee Id : <b>{this.props.Id}</b></label>
        </p>
        <p>
          <label>Employee Name : <b>{this.props.Name}</b></label>
        </p><p>
          <label>Employee Location : <b>{this.props.Location}</b></label>
        </p><p>
          <label>Employee Salary : <b>{this.props.Salary}</b></label>
        </p>
        <Department deptName={this.props.deptName}
        deptHead={this.props.deptHead}>
        </Department>
      </div>
  };
};

class Department extends React.Component{
  render(){
    return <div>
    <p>Dept Name is : <b>{this.props.deptName}</b></p>
    <p>Dept Head is : <b>{this.props.deptHead}</b></p>    
  </div>

  }
}
const element = <Employee Id="101" Name="Ajay" 
Location="Rajkot" Salary="1200000" deptName="Computer"
deptHead="Abcd">
</Employee>;
 
ReactDOM.render(element,document.getElementById("root"));