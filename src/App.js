import React, { useState, useEffect } from "react";
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
import GeoShape from "./components/GeoShape";
import "react-h5-audio-player/lib/styles.css";
import { LineWeight } from "./props/svg-lib";

const App = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [selectedFunction, setSelectedFunction] = useState("draw");
  const [shouldDelete, setShouldDelete] = useState(false);
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
    forceUpdate();
  };
  const handleDelete = (x, y) => {
    let newCanvasContent = canvasContent;
    newCanvasContent.forEach((content, index) => {
      if (content.key === `${x}${y}`) {
        newCanvasContent.splice(index, 1);
      }
    });
    setCanvasContent(newCanvasContent);
    forceUpdate();
  };

  useEffect(() => {
    if (selectedFunction === "erase") {
      setShouldDelete(true);
    } else setShouldDelete(false);
  }, [selectedFunction]);

  const newHandleDelete = (x, y, bool) => {
    if (shouldDelete) {
      let newCanvasContent = canvasContent;
      newCanvasContent.forEach(({ key }, index) => {
        if (key === `${x}${y + 60}`) {
          newCanvasContent.splice(index, 1);
        }
      });
      setCanvasContent(newCanvasContent);
    }
  };
  const handleClick = () => {
    const newCanvasContent = canvasContent;
    if (selectedFunction === "erase") {
    }
    if (selectedFunction === "textArea" || selectedFunction === "text") {
      setSelectedFunction("");
      newCanvasContent.push(
        <div key={`${x}${y}`}>
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
            handleDelete={handleDelete}
          />
        </div>
      );
      setCanvasContent(newCanvasContent);
    }
    if (selectedFunction === "shapes") {
      setSelectedFunction("");
      newCanvasContent.push(
        <div key={`${x}${y}`}>
          <ComponentDeleteButton
            x={x}
            y={y - 60}
            color={color}
            handleDelete={handleDelete}
          />
          <GeoShape
            color={color}
            both={false}
            x={x}
            y={y - 60}
            fill={false}
            size={brushRadius}
          />
        </div>
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
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
          key={`${x}${y}`}
          id={`${x}${y}`}
          handleDelete={handleDelete}
          newHandleDelete={newHandleDelete}
          shouldDelete={shouldDelete}
        />
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
    }
    if (selectedFunction === "image" && file) {
      setSelectedFunction("");
      newCanvasContent.push(
        <div key={`${x}${y}`}>
          <ComponentDeleteButton
            x={x}
            y={y - 60}
            color={color}
            handleDelete={handleDelete}
          />
          <div
            style={{
              position: "absolute",
              top: y - 60,
              left: x,
              maxWidth: "80vh",
              resize: "both",
              overflow: "hidden",
              zIndex: "1000",
            }}
          >
            <img
              src={file ? file : ""}
              key={`${x}${y}`}
              alt={fileName}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
    }
    if (selectedFunction === "video" && file) {
      setSelectedFunction("");
      newCanvasContent.push(
        <div key={`${x}${y}`}>
          <ComponentDeleteButton
            x={x}
            y={y - 60}
            color={color}
            handleDelete={handleDelete}
          />
          <video
            style={{
              position: "absolute",
              top: y - 60,
              left: x,
              maxWidth: "60vh",
              maxHeight: "60vh",
              zIndex: 99,
            }}
            src={file ? file : ""}
            key={file ? file : ""}
            autoPlay
            loop
            controls
          />
        </div>
      );
      setCanvasContent(newCanvasContent);
      setFile(null);
    }
    if (selectedFunction === "erase") setShouldDelete(true);
    else setShouldDelete(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
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
      <div onClick={() => handleClick()}>
        <FileCanvas>{canvasContent}</FileCanvas>
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
      {/* <GeoShape color={color} both={false} x={x} y={y} fill={false} /> */}
      <Sidebar
        selectedFunction={selectedFunction}
        setSelectedFunction={setSelectedFunction}
        setFile={setFile}
        setFileName={setFileName}
        undo={undo}
      />
    </>
  );
};

export default App;
