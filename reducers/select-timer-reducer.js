// Import SELECT_TIMER action 
import { SELECT_TIMER } from '../actions/index' 

const selectTimerReducer = (state = null, action) => {
  switch (action.type) {
    // set selectedTimer to value passed in payload
    case SELECT_TIMER:
      return state = action.payload.index
      default:
        return state; 
  }

}

export default selectTimerReducer