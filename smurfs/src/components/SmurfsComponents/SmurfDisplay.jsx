import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteSmurf } from "../../store/actions";

const SmurfDisplay = props => {
  const deleteSmurf = e => {
    window.confirm(
      `Are you sure you want to delete ${
        props.selectedSmurf.name
      } from your smurfs list?`
    ) && props.deleteSmurf(props.selectedSmurf.id);
  };

  return props.selectedSmurf ? (
    <div>
      <h2>{`${props.selectedSmurf.name}`}</h2>
      <div>
        <span>Age: </span>
        <span>{props.selectedSmurf.age}</span>
      </div>
      <div>
        <span>Height: </span>
        <span>{props.selectedSmurf.height}</span>
      </div>
      <div>
        <button type="button" onClick={deleteSmurf}>
          Delete Smurf
        </button>
      </div>
    </div>
  ) : (
    <div>(select a smurf to display)</div>
  );
};

SmurfDisplay.propTypes = {
  selectedSmurf: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number
  }),
  deleteSmurf: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    selectedSmurf: state.smurfDataReducer.selectedSmurf
  };
};

export default connect(
  mapStateToProps,
  {
    deleteSmurf
  }
)(SmurfDisplay);