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
} from '../actions/types'

//import { setLoading } from '../actions/logActions';

const intialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}


export default (state = intialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      }
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      }
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      }
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
        loading: false
      }
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGS_ERROR:
      console.error(action.payload);

      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    default:
      return state;
  }
}