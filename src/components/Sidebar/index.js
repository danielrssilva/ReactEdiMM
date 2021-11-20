import React from "react";
import {
  SidebarContainer,
  UndoRedoButton,
  UndoRedoDiv,
  UndoIcon,
  RedoIcon,
  PencilIcon,
  EraserIcon,
  MoveIcon,
  TextIcon,
  TextArea,
  ShapesIcon,
  AddFile,
  AddImageIcon,
  AddAudio,
  AddVideoIcon,
} from "./styles";
import SideButton from "../SideButton/index";
import FileInput from "../FileInput/index";
import PropTypes from "prop-types";

const Sidebar = ({
  selectedFunction,
  setSelectedFunction,
  setFile,
  setFileName,
  undo,
}) => {
  return (
    <>
      <SidebarContainer>
        <SideButton
          color="#E50304"
          value="draw"
          isSelected={selectedFunction === "draw"}
          setSelectedFunction={setSelectedFunction}
        >
          <PencilIcon />
        </SideButton>
        <SideButton
          color="#E55603"
          value="erase"
          isSelected={selectedFunction === "erase"}
          setSelectedFunction={setSelectedFunction}
        >
          <EraserIcon />
        </SideButton>
        <SideButton
          color="#FF8B00"
          value="move"
          isSelected={selectedFunction === "move"}
          setSelectedFunction={setSelectedFunction}
        >
          <MoveIcon />
        </SideButton>
        <SideButton
          color="#ECCE30"
          value="text"
          isSelected={selectedFunction === "text"}
          setSelectedFunction={setSelectedFunction}
        >
          <TextIcon />
        </SideButton>
        <SideButton
          color="#028128"
          value="textArea"
          isSelected={selectedFunction === "textArea"}
          setSelectedFunction={setSelectedFunction}
        >
          <TextArea />
        </SideButton>
        <SideButton
          color="#004DFF"
          value="shapes"
          isSelected={selectedFunction === "shapes"}
          setSelectedFunction={setSelectedFunction}
        >
          <ShapesIcon />
        </SideButton>
        <FileInput
          setFile={setFile}
          color="#770888"
          // isSelected={
          //   selectedFunction === "video" ||
          //   selectedFunction === "audio" ||
          //   selectedFunction === "image"
          //     ? true
          //     : false
          // }
          setSelectedFunction={setSelectedFunction}
          setFileName={setFileName}
        >
          {selectedFunction === "video" && <AddVideoIcon />}
          {selectedFunction === "audio" && <AddAudio />}
          {selectedFunction === "image" && <AddImageIcon />}
          {selectedFunction !== "image" &&
            selectedFunction !== "audio" &&
            selectedFunction !== "video" && <AddFile />}
        </FileInput>
        <UndoRedoDiv>
          <UndoRedoButton onClick={() => undo()}>
            <UndoIcon />
          </UndoRedoButton>
          <UndoRedoButton>
            <RedoIcon />
          </UndoRedoButton>
        </UndoRedoDiv>
      </SidebarContainer>
    </>
  );
};

Sidebar.propTypes = {
  setFile: PropTypes.func.isRequired,
  selectedFunction: PropTypes.string.isRequired,
  setSelectedFunction: PropTypes.func.isRequired,
  setFile: PropTypes.func.isRequired,
  setFileName: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
};
export default Sidebar;
