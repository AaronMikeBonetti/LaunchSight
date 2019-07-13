//A simple way to Redux App 

import React from 'react';
import { createStore, applyMiddleware } from "redux"
import "./app.scss"
import Loader from "./components/Loader/Loader"
import Navbar from "./components/Navbar/Navbar"
import Title from './components/Title/Title';
import Launches from './components/Launches/Launches';


// We Create initial State

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const initialState = {}

//This is where we add the middleware like thunk and pass it to createStore()

const middleware = []

//We Create A Reducer that takes in the current store and an action

const rootReducer = (store =DEFAULT_SETTINGS, action) => {
  console.log("store", store, "action", action)

//Here we compare the action type to the action that was dispatched

  if(action.type === "SET_GAME_STARTED"){
    return{
      
    }
  }

  //If the action type doesn't match we still need to return the previous state
 
return DEFAULT_SETTINGS
}

//You cant create the store without first creating a reducer. 

//the createStore(rootReducer, initialState,applyMiddleware(...middleware))

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));


//Here We created an action

const action1 = {
  gameStarted: true,
  type:""}

//Here we are dispatching it 

console.log("store Dispatched Action1", store.dispatch(action1))


console.log("store Final", store.getState());



function App(){
  
    return (
      
      <div>
        <Loader/>
        <Navbar/>
        <Title/>
        <Launches/>
      </div>
      
    )
  }


export default App;







