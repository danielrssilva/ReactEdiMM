import React, { useState, useEffect } from "react";
import { StyledAudio } from "./styles";
import AudioPlayer from "react-h5-audio-player";
import ComponentDeleteButton from "../ComponentDeleteButton";

const StyledAudioPlayer = ({ y, x, file, fileName, color }) => {
  return (
    <>
      <ComponentDeleteButton x={x} y={y} color={color} />
      <StyledAudio x={x} y={y} color={color}>
        <AudioPlayer controls src={file} header={fileName}>
          Your browser does not support the audio element.
        </AudioPlayer>
      </StyledAudio>
    </>
  );
};

export default StyledAudioPlayer;
