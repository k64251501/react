import React, { Component } from "react";
class Message extends React.Component{
    message ="good morning"
    ename ="rahul gandhi "
    emp ={id:101, name:"karthik", salary:95000}
   render(){
    return <div>
        <h2>message Component</h2>
        <h3>empolyee name:{this.ename}</h3>
        <h4>message:{this.message}</h4>
        <h5>employee id:{this.emp.id}, and salary:{this.emp.salary}</h5>

    </div>
   }
}
export default Message