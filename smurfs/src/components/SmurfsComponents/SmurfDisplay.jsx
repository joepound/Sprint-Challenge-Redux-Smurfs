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
    <div className="smurfs-app__info-display">
      <h2 className="smurfs-app__info-display__name">{`${
        props.selectedSmurf.name
      }`}</h2>
      <input
        className="smurfs-app__info-display__update-icon"
        type="image"
        src="images/edit-icon.png"
        alt="toggle update mode"
        onClick={toggleUpdateMode}
      />
      <div className="smurfs-app__info-display__info">
        <span className="smurfs-app__info-display__info__label">Age: </span>
        <span className="smurfs-app__info-display__info__value">{props.selectedSmurf.age}</span>
      </div>
      <div className="smurfs-app__info-display__info">
        <span className="smurfs-app__info-display__info__label">Height: </span>
        <span className="smurfs-app__info-display__info__value">{`${props.selectedSmurf.height}cm.`}</span>
      </div>
      <button className="smurfs-app__info-display__delete-btn" type="button" onClick={deleteSmurf}>
        Delete Smurf
      </button>
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
