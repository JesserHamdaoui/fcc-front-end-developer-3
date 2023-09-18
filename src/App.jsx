import React from "react";
import DrumMachineContainer from "./DrumMachineContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <div className="app flex justify-center items-center h-screen">
      <Provider store={store}>
        <DrumMachineContainer />
      </Provider>
    </div>
  );
};

export default App;
