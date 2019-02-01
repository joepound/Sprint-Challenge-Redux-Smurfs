import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteSmurf, toggleUpdateMode } from "../../store/actions";

const SmurfDisplay = props => {
  const deleteSmurf = e => {
    window.confirm(
      `Are you sure you want to delete ${
        props.selectedSmurf.name
      } from your smurfs list?`
    ) && props.deleteSmurf(props.selectedSmurf.id);
  };

  const toggleUpdateMode = e => {
    props.toggleUpdateMode(props.selectedSmurf);
  };

  return props.selectedSmurf ? (
    <div>
      <input
        type="image"
        src=""
        alt="toggle update mode"
        onClick={toggleUpdateMode}
      />
      <h2>{`${props.selectedSmurf.name}`}</h2>
      <div>
        <span>Age: </span>
        <span>{props.selectedSmurf.age}</span>
      </div>
      <div>
        <span>Height: </span>
        <span>{`${props.selectedSmurf.height}cm.`}</span>
      </div>
      <div>
        <button type="button" onClick={deleteSmurf}>
          Delete Smurf
        </button>
      </div>
    </div>
  ) : (
    props.hasSmurfs && <div>(select a smurf to display)</div>
  );
};

SmurfDisplay.propTypes = {
  hasSmurfs: PropTypes.bool.isRequired,
  selectedSmurf: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number
  }),
  deleteSmurf: PropTypes.func.isRequired,
  toggleUpdateMode: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    hasSmurfs: state.smurfDataReducer.smurfs.length > 1,
    selectedSmurf: state.smurfDataReducer.selectedSmurf
  };
};

export default connect(
  mapStateToProps,
  {
    deleteSmurf,
    toggleUpdateMode
  }
)(SmurfDisplay);
