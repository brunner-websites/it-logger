import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS
} from './types';

// Get Logs
export const getLogs = () => {

  return async (dispatch) => {

    try {
      setLoading();

      const res = await fetch('/logs');
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  }
}

// Add new log
export const addLog = (log) => {

  return async (dispatch) => {

    try {
      setLoading();

      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  }
}


// Delete Log from server Get Logs
export const deleteLog = (id) => {

  return async (dispatch) => {

    try {
      setLoading();

      await fetch(`/logs/${id}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  }
}


// Update Log on server
export const updateLog = (log) => {

  return async (dispatch) => {

    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      //const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: log
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  }
}

// Search Logs
export const searchLogs = (text) => {

  return async (dispatch) => {

    try {
      setLoading();

      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LOGS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    }
  }
}

// Set current log
export const setCurrent = log => {
  return async dispatch => {
    dispatch({
      type: SET_CURRENT,
      payload: log
    })
  }
  // return {
  //   type: SET_CURRENT,
  //   payload: log
  // }
}


// Set current log
export const clearCurrent = () => {
  return async dispatch => {
    dispatch({
      type: CLEAR_CURRENT
    })
  }

  // return {
  //   type: CLEAR_CURRENT
  // }
}


// Set 'loading' to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}