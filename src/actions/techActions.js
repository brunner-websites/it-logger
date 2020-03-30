import {
  ADD_TECH,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';


// Get Techs from Server
export const getTechs = () => {

  return async (dispatch) => {

    try {
      setLoading();

      const res = await fetch('/techs');
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  }
}

// Add new technician
export const addTech = (tech) => {

  return async (dispatch) => {

    try {
      setLoading();

      const res = await fetch('/techs', {
        method: 'POST',
        body: JSON.stringify(tech),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      console.log(data);

      dispatch({
        type: ADD_TECH,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  }
}


// Delete Tech from server
export const deleteTech = (id) => {

  return async (dispatch) => {

    try {
      setLoading();

      await fetch(`/techs/${id}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_TECH,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    }
  }
}

// Set 'loading' to true
export const setLoading = () => {
  return dispatch => {
    dispatch({
      type: SET_LOADING
    })
  }
}