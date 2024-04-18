import callReducer from "./reducers/callReducer";
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducers = combineReducers({
    // stream: stream_reducer,
    call: callReducer,
  })


  const store = configureStore({
    reducer: rootReducers,
   
  })
  
  export default store
