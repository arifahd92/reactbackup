import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({count:this.state.count+1},()=>console.log("call back value inside setState"+this.state.count))// now count has increase by 1,setState takes two prametre 2nd is a callback fxn that is optional
        console.log("outside set state"+this.state.count)//ye pahle chalega fir setState chalega setState async hua
        //if u want to render any value ater set state write that inside setState 2nd parameter
    }

  render() {
    return (
        <>
      <div>Counter-{this.state.count}</div>
      {/* <button onClick={()=>this.setState({count:this.state.count+1})}>click me</button> */}
      <button onClick={()=>this.increment()}>click</button>
        </>
    )
  }
}

export default Counter