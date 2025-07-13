import React, { useRef } from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audioRef = useRef(null);

  if (!props.phonetic && !props.audioUrl) {
    return null;
  }

  return (
    <div className="Phonetic">

      {props.audioUrl && (
        <>
          <audio ref={audioRef} src={props.audioUrl} preload="none" />
          <button
            className="play-button"
            onClick={() => audioRef.current.play()}
            aria-label="Play pronunciation"
          >
            🔊
          </button>
        </>
      )}

      {props.phonetic && <h2>{props.phonetic}</h2>}
    </div>
  );
}
