import axios from 'axios';
import Axios from 'axios'
import { axiosGet, axiosGetWithID } from '../../helpers/axios';
import { types } from '../types/types'


/*---------------POSTS-----------------*/

export const startGetAllPosts = () => {
    return async (dispatch) => {
      const posts = await axiosGet('posts');
      dispatch( getAllposts ( posts ));
    }
}

const getAllposts = ( posts ) =>{
  return {
    type: types.GET_ALL_POSTS,
    payload: posts
  }
}

export const startGetPost = (id) => {
  return  async (dispatch) => {
    const post = await axiosGetWithID('posts', id)
    dispatch(getPost( post ));
  }
}

const getPost = ( post ) => {
  return {
    type: types.GET_POST,
    payload: post
  }
}

/*---------------Specialities-----------------*/

export const startGetAllSpeacialities = () => {
    return async (dispatch) => {
      const specialities = await axiosGet('especialidades');
      dispatch( getAllSpecialities (specialities));
    }
}

const getAllSpecialities = ( specialities ) =>{
  return {
    type: types.GET_ALL_SPECIALITIES,
    payload: specialities
  }
}

export const startGetSpeaciality = (id) => {
  return async(dispatch) => {
    const speciality = await axiosGetWithID('especialidad', id);
    dispatch(getSpeciality(speciality));
  }
}

const getSpeciality = ( speciality ) => {
  return {
    type: types.GET_SPECIALITY,
    payload: speciality
  }
}
/*---------------Teachers-----------------*/
export const getAllTeachers = () => {
    return (dispatch) => {
      Axios.get(`${process.env.REACT_APP_API_URL}/profesores`)
        .then( resp => {
          return dispatch({
            type: types.GET_ALL_TEACHERS,
            payload: resp.data
          })
        })
      }
 }
    
/*---------------Courses-----------------*/
export const getAllCourses = () => {
  return (dispatch) => {
    Axios.get(`${process.env.REACT_APP_API_URL}/cursos`)
    .then( resp => {
      return dispatch({
        type: types.GET_ALL_COURSES,
        payload: resp.data
      })
    })
  }
}
    
export const getCourse = (id) => {
    return (dispatch) => {
      Axios.get(`${process.env.REACT_APP_API_URL}/curso/${id}`)
        .then( resp => {
          return dispatch({
            type: types.GET_COURSE,
            payload: resp.data
          })
        })
    }
}


/*---------------Classes-----------------*/

export const getClass = (id) => {
    return (dispatch) => {
      Axios.get(`${process.env.REACT_APP_API_URL}/clases/${id}`)
        .then( resp => {
          return dispatch({
            type: types.GET_CLASS,
            payload: resp.data
          })
        })
    }
}
