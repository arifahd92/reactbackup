import React, { Component } from 'react'

export default class Counter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        // this.setState({count:this.state.count+1})//har click pe ek se increment hoga
       this.setState(
        (prevstate)=>({count:prevstate.count+1})
        )//har click pe 5 se increment hoga
    }
  incrementFive(){
    this.increment()//jab bhi fxn call ho raha this k sath
    this.increment()
    this.increment()
    this.increment()
    this.increment()

  }
  render() {
    return (<>
      <div>{this.props.name}</div>
      <div>Counter2-{this.state.count}</div>
      <button onClick={()=>this.incrementFive()}>click</button>
         </>
    )
  }
}
