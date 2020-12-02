import React, { useState } from "react";
import AppHeader from "../src/components/header/index";
import Sidebar from "./components/Sidebar/index";
import CanvasDraw from "react-canvas-draw";
// import Canvas from "./components/Canvas/index.jsx";
import GetMousePosition from "./components/MouseChecker";
import FileCanvas from "./components/FileCanvas";
import Text from "./components/Text";
import "react-h5-audio-player/lib/styles.css";
import StyledAudioPlayer from "./components/StyledAudioPlayer";
import ComponentDeleteButton from "./components/ComponentDeleteButton";
import "react-h5-audio-player/lib/styles.css";

const App = () => {
  const [selectedFunction, setSelectedFunction] = useState("draw");
  const [color, setColor] = useState("#000000");
  const [font, setFont] = useState("Arial");

  const [bold, setBold] = useState(false);
  const [underlined, setUnderlined] = useState(false);
  const [italic, setItalic] = useState(false);

  const [fontSize, setFontSize] = useState(12);
  const [brushRadius, setBrushRadius] = useState(1);
  const [canvasContent, setCanvasContent] = useState([]);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const { x, y } = GetMousePosition();

  const undo = () => {
    const newCanvasContent = canvasContent;
    newCanvasContent.pop();
    setCanvasContent(newCanvasContent);
  };
  const handleDelete = (element) => {
    console.log(element);
  };
  const handleClick = () => {
    const newCanvasContent = canvasContent;
    if (selectedFunction === "textArea" || selectedFunction === "text") {
      setSelectedFunction("");
      newCanvasContent.push(
        <div key={`textAt-${x}-${y}`}>
          <Text
            x={x}
            y={y}
            font={font}
            size={fontSize}
            color={color}
            italic={italic}
            bold={bold}
            underlined={underlined}
            isTextArea={selectedFunction === "textArea" ? true : false}
            className={newCanvasContent.length + 1}
          />
        </div>
      );
      setCanvasContent(newCanvasContent);
    }
    if (selectedFunction === "audio" && file) {
      setSelectedFunction("");
      newCanvasContent.push(
        <StyledAudioPlayer
          color={color}
          x={x}
          y={y - 60}
          file={file}
          fileName={fileName}
          key={"x:" + x + "-y:" + y + "file:" + fileName}
          id={"x:" + x + "-y:" + y + "file:" + fileName}
          handleDelete={handleDelete}
          shouldDelete={selectedFunction}
        />
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
    }
    if (selectedFunction === "image" && file) {
      setSelectedFunction("");
      newCanvasContent.push(
        <>
          <ComponentDeleteButton x={x} y={y - 60} color={color} />
          <img
            style={{
              position: "absolute",
              top: y - 60,
              left: x,
              maxWidth: "800px",
            }}
            src={file ? file : ""}
            key={file ? file : ""}
            onDoubleClick={(e) => console.log(e.target)}
            alt={fileName}
          />
        </>
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
    }
    if (selectedFunction === "video" && file) {
      setSelectedFunction("");
      newCanvasContent.push(
        <>
          <ComponentDeleteButton x={x} y={y - 60} color={color} />
          <video
            style={{
              position: "absolute",
              top: y - 60,
              left: x,
              maxWidth: "800px",
              zIndex: 99,
            }}
            src={file ? file : ""}
            key={file ? file : ""}
            onDoubleClick={(e) => console.log(e.target)}
            autoPlay
            loop
            controls
          />
        </>
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div onClick={() => handleClick()}>
      <FileCanvas>{canvasContent}</FileCanvas>
      <AppHeader
        brushRadius={brushRadius}
        setBrushRadius={setBrushRadius}
        setColor={setColor}
        color={color}
        fontSize={fontSize}
        font={font}
        setFont={setFont}
        setFontSize={setFontSize}
        bold={bold}
        setBold={setBold}
        underlined={underlined}
        setUnderlined={setUnderlined}
        italic={italic}
        setItalic={setItalic}
        handlePrint={handlePrint}
      />
      <Sidebar
        selectedFunction={selectedFunction}
        setSelectedFunction={setSelectedFunction}
        setFile={setFile}
        setFileName={setFileName}
        undo={undo}
      />
      <CanvasDraw
        brushColor={color}
        brushRadius={brushRadius}
        disabled={selectedFunction === "draw" ? false : true}
        lazyRadius={0}
        style={{
          postion: "fixed",
          width: "100vw",
          height: "100vh",
          top: "0",
          background: "#ffffffff",
        }}
        hideGrid
      />
    </div>
  );
};

export default App;
