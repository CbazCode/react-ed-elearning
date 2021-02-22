import { types } from "../types/types";

export const specialityReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_SPECIALITIES:
      return {
        ...state,
        specialities: action.payload
      }
    
    case types.GET_SPECIALITY:
      return {
        ...state,
        speciality: action.payload
      }
    
      default:
        return state;
  }
}

