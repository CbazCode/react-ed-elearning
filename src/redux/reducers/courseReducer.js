import { types } from "../types/types";

export const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload
      }
        
    case types.GET_COURSE:
      return {
        ...state,
        course: action.payload
      }
    
      default:
        return state;
  }
}
