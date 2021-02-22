import { types } from "../types/types";

export const classReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CLASS:
      return {
        ...state,
        classe: action.payload
      }
     
      default:
        return state;
  }
}
