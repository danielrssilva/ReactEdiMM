import React, { useState } from "react";
import { WrittableContent, HeaderButton, Content, MenuIcon } from "./styles";
import TextMenu from "../TextMenu";

const Text = ({
  x,
  y,
  font,
  size,
  color,
  isTextArea,
  bold,
  underlined,
  italic,
  handleDelete,
}) => {
  const [renderMenu, setRenderMenu] = useState(false);
  const [thisBold, setThisBold] = useState(bold);
  const [thisUnderlined, setThisUnderlined] = useState(underlined);
  const [thisItalic, setThisItalic] = useState(italic);
  const [thisFont, setThisFont] = useState(font);
  const [thisFontSize, setThisFontSize] = useState(size);
  const [thisColor, setThisColor] = useState(color);
  return (
    <>
      <Content x={x} y={y}>
        <HeaderButton onClick={() => setRenderMenu(!renderMenu)}>
          <MenuIcon />
        </HeaderButton>
        <WrittableContent
          x={x}
          y={y}
          font={thisFont}
          size={thisFontSize}
          color={thisColor}
          isTextArea={isTextArea}
          bold={thisBold}
          underlined={thisUnderlined}
          italic={thisItalic}
          contentEditable
        >
          Clique para editar.
        </WrittableContent>
        {renderMenu && (
          <TextMenu
            x={x}
            y={y}
            font={thisFont}
            size={thisFontSize}
            color={thisColor}
            bold={thisBold}
            italic={thisItalic}
            underlined={thisUnderlined}
            setThisBold={setThisBold}
            setThisUnderlined={setThisUnderlined}
            setThisItalic={setThisItalic}
            handleDelete={handleDelete}
            setFontFamily={setThisFont}
            setFontSize={setThisFontSize}
            setColor={setThisColor}
          />
        )}
      </Content>
    </>
  );
};

export default Text;
