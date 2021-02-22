
import Axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL


export const axiosGet = ( endpoint ) => {
  return Axios.get(`${baseURL}/${endpoint}`)
    .then( res => {
      return res.data;
    })
}

export const axiosGetWithID = ( endpoint, id ) => {
  return Axios.get(`${baseURL}/${endpoint}/${id}`)
    .then( res => {
      return res.data;
    })
}
