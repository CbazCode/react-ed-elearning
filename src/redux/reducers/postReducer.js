import { types } from "../types/types";

export const postReducer = (state = {}, action) => {

    switch (action.type) {
      case types.GET_ALL_POSTS:
        return {
          ...state,
          posts: action.payload
        }
      
      case types.GET_POST:
        return {
          ...state,
          post: action.payload
        }
      
        default:
          return state;
    }
}
