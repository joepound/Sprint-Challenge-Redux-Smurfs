import axios from "axios";

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
} from "./types";

const baseURL = "http://localhost:3333";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get(`${baseURL}/smurfs`)
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }));
};

export const handleTextInputChange = e => dispatch =>
  dispatch({
    type: HANDLE_TEXT_INPUT_CHANGE,
    payload: e.target
  });

export const clearTextInputs = () => dispatch =>
  dispatch({ type: CLEAR_TEXT_INPUTS });

export const addSmurf = (name, age, height) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(`${baseURL}/smurfs`, { name, age: age, height: height })
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};

export const querySmurfInfo = id => dispatch => {
  dispatch({ type: SELECT_SMURF_START });
  axios
    .get(`${baseURL}/smurfs/${id}`)
    .then(res => dispatch({ type: SELECT_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SELECT_SMURF_FAILURE, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`${baseURL}/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
};

export const updateSmurf = (id, smurfUpdateInfo) => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
    .put(`${baseURL}/smurfs/${id}`, smurfUpdateInfo)
    .then(res => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_SMURF_FAILURE, payload: err }));
};

export const toggleUpdateMode = selectedSmurf => dispatch =>
  dispatch({ type: TOGGLE_UPDATE_MODE, payload: selectedSmurf });
