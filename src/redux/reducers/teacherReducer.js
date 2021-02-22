import { types } from "../types/types";

export const teacherReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_TEACHERS:
      return {
        ...state,
        teachers: action.payload
      }
    
      default:
        return state;
  }
}
