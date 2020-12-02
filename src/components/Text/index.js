import React, { useState } from "react";
import {
  WrittableContent,
  Menu,
  HeaderButton,
  Content,
  MenuIcon,
  MoveIcon,
  Delete,
} from "./styles";
import { Bold, Underline, Italic } from "../../props/svg-lib";
import GetMousePosition from "../../components/MouseChecker";

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
}) => {
  const [posX, setPosX] = useState(x);
  const [posY, setPosY] = useState(y);
  const [renderComponent, setRenderComponent] = useState(true);
  const [renderMenu, setRenderMenu] = useState(false);
  const [thisBold, setThisBold] = useState(bold);
  const [thisUnderlined, setThisUnderlined] = useState(underlined);
  const [thisItalic, setThisItalic] = useState(italic);
  const handleRightClick = (e) => {
    e.preventDefault();
    setRenderMenu(!renderMenu);
  };
  const handleDelete = () => {
    var r = confirm("Press a button!");
    if (r == true) setRenderComponent(false);
  };
  return (
    <>
      {renderComponent && (
        <Content x={posX} y={posY}>
          <HeaderButton onClick={() => setRenderMenu(!renderMenu)}>
            <MenuIcon />
          </HeaderButton>
          <WrittableContent
            x={posX}
            y={posY}
            font={font}
            size={size}
            color={color}
            isTextArea={isTextArea}
            bold={thisBold}
            underlined={thisUnderlined}
            italic={thisItalic}
            contentEditable
            onContextMenu={(e) => handleRightClick(e)}
          >
            Clique para editar.
          </WrittableContent>
          {renderMenu && (
            <Menu x={posX} y={posY}>
              <div>MENU</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <HeaderButton
                    onClick={() => setThisBold(!thisBold)}
                    className={thisBold ? "active" : ""}
                  >
                    <Bold />
                  </HeaderButton>
                  <HeaderButton
                    onClick={() => setThisUnderlined(!thisUnderlined)}
                    className={thisUnderlined ? "active" : ""}
                  >
                    <Underline />
                  </HeaderButton>
                  <HeaderButton
                    onClick={() => setThisItalic(!thisItalic)}
                    className={thisItalic ? "active" : ""}
                  >
                    <Italic />
                  </HeaderButton>
                  <HeaderButton
                    onClick={() => setThisItalic(!thisItalic)}
                    className={thisItalic ? "active" : ""}
                  >
                    <MoveIcon />
                  </HeaderButton>
                </div>
                <div
                  style={{
                    width: "2px",
                    margin: "0 4px",
                  }}
                />
                <div>
                  <HeaderButton
                    onClick={() => handleDelete()}
                    style={{ background: "none", color: "red", border: "none" }}
                  >
                    <Delete />
                  </HeaderButton>
                </div>
              </div>
            </Menu>
          )}
        </Content>
      )}
    </>
  );
};

export default Text;
