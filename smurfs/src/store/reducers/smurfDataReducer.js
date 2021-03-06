import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  HANDLE_TEXT_INPUT_CHANGE,
  CLEAR_TEXT_INPUTS,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  SELECT_SMURF_START,
  SELECT_SMURF_SUCCESS,
  SELECT_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  TOGGLE_UPDATE_MODE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE
} from "../actions/types";

let initialState = {
  newName: "",
  newAge: "",
  newHeight: "",
  smurfs: [],
  selectedSmurf: null,
  isInUpdateMode: false,
  isFetchingSmurfs: false,
  hasFetchedSmurfs: false,
  isSavingSmurf: false,
  hasSavedSmurf: false,
  isQueryingSmurf: false,
  hasQueriedSmurf: false,
  isDeletingSmurf: false,
  hasDeletedSmurf: false,
  isUpdatingSmurf: false,
  hasUpdatedSmurf: false,
  error: null
};

const smurfDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetchingSmurfs: false,
        hasFetchedSmurfs: false,
        error: null
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingSmurfs: false,
        hasFetchedSmurfs: true
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isFetchingSmurfs: false,
        error: action.payload
      };
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case CLEAR_TEXT_INPUTS:
      return {
        ...state,
        newName: "",
        newAge: "",
        newHeight: ""
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isSavingSmurf: true,
        hasSavedSmurf: false,
        error: null
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isSavingSmurf: false,
        hasSavedSmurf: true,
        newName: "",
        newAge: "",
        newHeight: ""
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isSavingSmurf: false,
        error: action.payload
      };
    case SELECT_SMURF_START:
      return {
        ...state,
        isQueryingSmurf: true,
        hasQueriedSmurf: false,
        error: null
      };
    case SELECT_SMURF_SUCCESS:
      return {
        ...state,
        isQueryingSmurf: false,
        hasQueriedSmurf: true,
        selectedSmurf: action.payload,
        isInUpdateMode: false
      };
    case SELECT_SMURF_FAILURE:
      return {
        ...state,
        isQueryingSmurf: false,
        error: action.payload
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isDeletingSmurf: true,
        hasDeletedSmurf: false,
        error: null
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isInUpdateMode: action.payload.length ? state.isInUpdateMode : false,
        selectedSmurf: null,
        isDeletingSmurf: false,
        hasDeletedSmurf: true,
        newName: "",
        newAge: "",
        newHeight: ""
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isDeletingSmurf: false,
        error: action.payload
      };
    case TOGGLE_UPDATE_MODE:
      return {
        ...state,
        newName: state.isInUpdateMode ? "" : action.payload.name,
        newAge: state.isInUpdateMode ? "" : action.payload.age,
        newHeight: state.isInUpdateMode ? "" : action.payload.height,
        isInUpdateMode: !state.isInUpdateMode
      };
    case UPDATE_SMURF_START:
      return {
        ...state,
        isUpdatingSmurf: true,
        hasUpdatedSmurf: false,
        error: null
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload.smurfs,
        selectedSmurf: action.payload.foundSmurf,
        isInUpdateMode: false,
        isUpdatingSmurf: false,
        hasUpdatedSmurf: true,
        newName: "",
        newAge: "",
        newHeight: ""
      };
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        isUpdatingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfDataReducer;
