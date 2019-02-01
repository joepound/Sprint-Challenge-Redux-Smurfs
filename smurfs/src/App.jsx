import React from "react";

import { HeaderContainer } from "./components/HeaderComponents";
import { SmurfsContainer } from "./components/SmurfsComponents";

const App = props => {
  return (
    <div className="smurfs-app">
      <HeaderContainer />
      <SmurfsContainer />
    </div>
  );
};

export default App;
