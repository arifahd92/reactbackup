import React, { useReducer } from "react"
// const initialstate = 0
function reducer(state, action){
if (action.type=="incrmnt"){
 return  state+1
}
if(action.type=="dcrmnt"){
  return state-1
}
return state;
}
function Reducerhook(){
  const [state,dispatch]=useReducer(reducer,0)
return(
  <>
  <h1>hi i m use reducer</h1>
  <input type="text" value={state}/>
  <button onClick={()=>dispatch({type:"incrmnt"})}>inc</button>
  <button onClick={()=>dispatch({type:"dcrmnt"})}>dcclk</button>
  <br/>
  ise is tarah socho k dispatch ko argument de rahe to argument 
  anonymous fxn k baad hi fxn ka naam likh k dete hain;
  and argument ka type object hai
  </>
)
}
export default Reducerhook