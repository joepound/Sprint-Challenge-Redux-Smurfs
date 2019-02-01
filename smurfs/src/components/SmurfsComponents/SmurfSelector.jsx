import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getSmurfs, querySmurfInfo } from "../../store/actions";

class SmurfSelector extends Component {
  static propTypes = {
    smurfs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        // Allow string type to be able to set controlled age input to be empty
        age: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        // Allow string type to be able to set controlled height input to be empty
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired
      })
    ).isRequired,
    getSmurfs: PropTypes.func.isRequired,
    querySmurfInfo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  querySmurfInfo = e => {
    this.props.querySmurfInfo(e.currentTarget.value);
  };

  render() {
    return (
      <div className="smurfs-app__select-smurf">
        <label htmlFor="smurfSelect">Your Smurf List:</label>
        <select
          className="smurfs-app__select-smurf__dropdown"
          onChange={this.querySmurfInfo}
        >
          <option
            className="smurfs-app__select-smurf__dropdown__option"
            defaultValue
            hidden
          >
            Select a smurf
          </option>
          {this.props.smurfs.map(smurf => (
            <option
              className="smurfs-app__select-smurf__dropdown__option"
              key={smurf.id}
              value={smurf.id}
            >
              {smurf.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfDataReducer.smurfs
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    querySmurfInfo
  }
)(SmurfSelector);
