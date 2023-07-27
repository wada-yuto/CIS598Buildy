import { createContext, useReducer } from 'react'

export const RunContext = createContext()

export const runReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        workouts: [action.payload, ...state.workouts] 
      }
    case 'DELETE_WORKOUT':
      return { 
        workouts: state.workouts.filter(workout => workout._id!== action.payload._id) 
      }
    case 'PATCH_WORKOUT':
      return { 
        workouts: state.workouts.map(workout => workout._id === action.payload._id? action.payload : workout) 
      }
    case 'RECOMMEND_WORKOUT':
      return {
        workouts: action.payload 
      }
    default:
      return state
  }
}

export const RunContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(runReducer, { 
    workouts: null
  })
  
  return (
    <RunContext.Provider value={{ ...state, dispatch }}>
      { children }
    </RunContext.Provider>
  )
}