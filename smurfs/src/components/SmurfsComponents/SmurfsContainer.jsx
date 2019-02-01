import React from "react";

import SmurfForm from "./SmurfForm";
import SmurfSelector from "./SmurfSelector";
import SmurfDisplay from "./SmurfDisplay";

const SmurfsContainer = props => {
  return (
    <React.Fragment>
      <SmurfForm />
      <SmurfSelector />
      <SmurfDisplay />
    </React.Fragment>
  );
};

export default SmurfsContainer;
