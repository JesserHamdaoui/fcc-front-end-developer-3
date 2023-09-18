import React from "react";
import DrumPad from "./DrumPad";
import { useSelector } from "react-redux";

const DrumMachineContainer = () => {
  const display = useSelector((state) => state.display);

  return (
    <div className="flex gap-6 bg-slate-300 p-5 rounded-lg" id="drum-machine">
      {/* <h1>FCC FRONT END DEVELOPING PROJECT 3</h1> */}
      <div className="grid grid-cols-3 gap-4">
        <DrumPad
          title="Heater 1"
          id="Q"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
        <DrumPad
          title="Heater 2"
          id="W"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        />
        <DrumPad
          title="Heater 3"
          id="E"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        />
        <DrumPad
          title="Heater 4"
          id="A"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        />
        <DrumPad
          title="Clap"
          id="S"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        />
        <DrumPad
          title="Open-HH"
          id="D"
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        />
        <DrumPad
          title="Kick-n'-Hat"
          id="Z"
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        />
        <DrumPad
          title="Kick"
          id="X"
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        />
        <DrumPad
          title="Closed-HH"
          id="C"
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        />
      </div>
      <h2
        id="display"
        className="w-24 py-2 text-slate-100 rounded-md text-center bg-slate-600"
      >
        {display}
      </h2>
    </div>
  );
};

export default DrumMachineContainer;
