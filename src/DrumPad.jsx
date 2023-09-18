import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateDisplay } from "./redux/display/displayActions";

const DrumPad = ({ id, src, title }) => {
  const dispatch = useDispatch();

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    dispatch(updateDisplay(title));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toUpperCase() === id) {
        handlePlay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="drum-pad cursor-pointer p-5 bg-zinc-800 text-slate-100 inline rounded-md shadow-lg"
      onClick={handlePlay}
      id={title}
    >
      {id}
      <audio
        ref={audioRef}
        className="clip"
        id={id}
        src={src}
        type="audio/mp3"
      />
    </div>
  );
};

export default DrumPad;
