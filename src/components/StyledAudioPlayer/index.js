import React, { useState, useEffect } from "react";
import { StyledAudio } from "./styles";
import AudioPlayer from "react-h5-audio-player";
import ComponentDeleteButton from "../ComponentDeleteButton";

const StyledAudioPlayer = ({
  y,
  x,
  file,
  fileName,
  color,
  handleDelete,
  newHandleDelete,
  shouldDelete,
}) => {
  return (
    <div onClick={() => newHandleDelete(x, y, shouldDelete)}>
      <ComponentDeleteButton
        x={x}
        y={y}
        color={color}
        handleDelete={handleDelete}
      />
      <StyledAudio x={x} y={y} color={color}>
        <AudioPlayer controls src={file} header={fileName}>
          Your browser does not support the audio element.
        </AudioPlayer>
      </StyledAudio>
    </div>
  );
};

export default StyledAudioPlayer;
