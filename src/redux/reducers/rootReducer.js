import { combineReducers } from "redux";
import { classReducer } from "./classReducer";
import { courseReducer } from "./courseReducer";
import { postReducer } from "./postReducer";
import { specialityReducer } from "./specialityReducer";
import { teacherReducer } from "./teacherReducer";


export const rootReducer = combineReducers( {
  class: classReducer,
  teacher: teacherReducer,
  course: courseReducer,
  post: postReducer,
  speciality: specialityReducer
})
