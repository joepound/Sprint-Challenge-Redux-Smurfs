import React from "react";

import SmurfForm from "./SmurfForm";
import SmurfSelector from "./SmurfSelector";
import SmurfDisplay from "./SmurfDisplay";

const SmurfsContainer = props => {
  return (
    <>
      <SmurfSelector />
      <SmurfDisplay />
      <SmurfForm />
    </>
  );
};

export default SmurfsContainer;
