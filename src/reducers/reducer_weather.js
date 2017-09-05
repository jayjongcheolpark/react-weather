import { FETCH_WEATHER } from '../actions/ActionTypes'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // totally same with state.concat([action.payload.data])
      return  [ ...state, action.payload.data ]
    default:
      return state
  } 
}