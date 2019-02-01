import React from "react";

import SmurfForm from "./SmurfForm";
import SmurfSelector from "./SmurfSelector";
import SmurfDisplay from "./SmurfDisplay";

const SmurfsContainer = props => {
  return (
    <>
      <SmurfForm />
      <SmurfSelector />
      <SmurfDisplay />
    </>
  );
};

export default SmurfsContainer;
