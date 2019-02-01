import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleTextInputChange, addSmurf } from "../../store/actions";

const SmurfForm = props => {
  const addSmurf = e => {
    // To avoid page reload
    e.preventDefault();

    // Check for empty name input
    if (!props.newName) {
      alert("Please enter a first name for your smurf first.");
    } else if (!props.newAge) {
      // Check for empty age input
      alert("Please enter an age value for your smurf first.");
    } else if (!props.newHeight) {
      // Check for empty email input
      alert("Please enter a height value for your smurf first.");
    } else if (isNaN(props.newAge) || props.newAge < 0) {
      alert("Please enter a valid age value.");
    } else if (isNaN(props.newHeight) || props.newHeight < 0) {
      alert("Please enter a valid height value.");
    } else {
      props.addSmurf(props.newName, props.newAge, props.newHeight);
    }
  };

  return (
    <React.Fragment>
      {props.isInUpdateMode && (
        <span className="smurfs-app__new-info-form__updatee">
          NOW UPDATING: {props.selectedSmurf.toUpperCase()}
        </span>
      )}
      <form className="smurfs-app__new-info-form" onSubmit={addSmurf}>
        <div className="smurfs-app__new-info-form__field">
          <label
            className="smurfs-app__new-info-form__field__label"
            htmlFor="newName"
          >
            Name:
          </label>
          <input
            className="smurfs-app__new-info-form__field__input"
            id="newName"
            type="text"
            placeholder="Enter your smurf's name"
            required
            name="newName"
            value={props.newName}
            onChange={props.handleTextInputChange}
          />
        </div>
        <div className="smurfs-app__new-info-form__field">
          <label
            className="smurfs-app__new-info-form__field__label"
            htmlFor="newAge"
          >
            Age:
          </label>
          <input
            className="smurfs-app__new-info-form__field__input"
            id="newAge"
            type="number"
            placeholder="Age"
            required
            name="newAge"
            value={props.newAge}
            onChange={props.handleTextInputChange}
          />
        </div>
        <div className="smurfs-app__new-info-form__field">
          <label
            className="smurfs-app__new-info-form__field__label"
            htmlFor="newHeight"
          >
            Height (in centimeters):
          </label>
          <input
            className="smurfs-app__new-info-form__field__input"
            id="newHeight"
            type="number"
            placeholder="cm."
            required
            name="newHeight"
            value={props.newHeight}
            onChange={props.handleTextInputChange}
          />
        </div>
        <div className="smurfs-app__new-info-form__action-buttons">
          <div>Clear</div>
          {props.isInUpdateMode ? (
            <button>Update Smurf</button>
          ) : (
            <button>Add Smurf</button>
          )}
        </div>
      </form>
    </React.Fragment>
  );
};

SmurfForm.propTypes = {
  newName: PropTypes.string.isRequired,
  // Allow string type to be able to set controlled age input to be empty
  newAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  // Allow string type to be able to set controlled height input to be empty
  newHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  selectedSmurfName: PropTypes.string,
  isInUpdateMode: PropTypes.bool.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  addSmurf: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    newName: state.smurfDataReducer.newName,
    newAge: state.smurfDataReducer.newAge,
    newHeight: state.smurfDataReducer.newHeight,
    selectedSmurf:
      state.smurfDataReducer.selectedSmurf === null
        ? null
        : state.smurfDataReducer.selectedSmurf.name,
    isInUpdateMode: state.smurfDataReducer.isInUpdateMode
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    addSmurf
  }
)(SmurfForm);
