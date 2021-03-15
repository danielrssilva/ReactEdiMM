import React, { useState } from "react";
import { Menu, MenuButton, Delete } from "./styles";
import { Bold, Underline, Italic } from "../../props/svg-lib";
import DropDownMenu from "../DropDownMenu";
import fonts from "../../props/fonts";
import { TwitterPicker } from "react-color";

const TextMenu = ({
  x,
  y,
  font,
  size,
  bold,
  color,
  underlined,
  italic,
  setThisBold,
  setThisUnderlined,
  setThisItalic,
  handleDelete,
  setFontFamily,
  setFontSize,
  setColor,
}) => {
  const [renderDropDownFont, setRenderDropDownFont] = useState(false);
  const [renderDropdownFontSize, setRenderDropdownFontSize] = useState(false);
  const [renderColorPicker, setRenderColorPicker] = useState(false);

  //Essas funções nececitam estar em um outro arquivo, já que se repetem nos headers (texto e app)

  const renderFontSize = () => {
    let sizes = [];
    for (let i = 10; i <= 50; i += 2) {
      sizes.push(
        <p
          onClick={() => handleFontSizeChange(i)}
          title={`Tamanho da fonte: ${i}px`}
        >
          {i}
        </p>
      );
    }
    return sizes;
  };
  const handleFontChange = (font) => {
    setFontFamily(font);
    setRenderDropDownFont(false);
  };
  const handleFontSizeChange = (size) => {
    setFontSize(size);
    setRenderDropdownFontSize(false);
  };
  const handleColorChange = ({ hex }) => {
    setColor(hex);
    setRenderColorPicker(false);
  };
  return (
    <Menu>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MenuButton
            onClick={() => setThisBold(!bold)}
            className={bold ? "active" : ""}
          >
            <Bold />
          </MenuButton>
          <MenuButton
            onClick={() => setThisUnderlined(!underlined)}
            className={underlined ? "active" : ""}
          >
            <Underline />
          </MenuButton>
          <MenuButton
            onClick={() => setThisItalic(!italic)}
            className={italic ? "active" : ""}
          >
            <Italic />
          </MenuButton>
          <div>
            <MenuButton
              onClick={() => setRenderDropDownFont(!renderDropDownFont)}
              hasDropDown
              dropDownActive={renderDropDownFont}
            >
              <span style={{ fontFamily: font }}>{font}</span>
            </MenuButton>
            {renderDropDownFont && (
              <DropDownMenu>{fonts(handleFontChange)}</DropDownMenu>
            )}
          </div>
          <div>
            <MenuButton
              onClick={() => setRenderDropdownFontSize(!renderDropdownFontSize)}
              hasDropDown
              dropDownActive={renderDropdownFontSize}
            >
              <span>{size}</span>
            </MenuButton>
            {renderDropdownFontSize && (
              <DropDownMenu>{renderFontSize()}</DropDownMenu>
            )}
          </div>
          <div>
            <MenuButton
              onClick={() => setRenderColorPicker(!renderColorPicker)}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: color,
                  borderRadius: "400px 0 400px 400px",
                  transform: "rotate(-45deg)",
                  marginTop: "3px",
                }}
              />
            </MenuButton>
            {renderColorPicker && (
              <TwitterPicker
                onChangeComplete={handleColorChange}
                colors={[
                  "#FF6900",
                  "#FCB900",
                  "#ECCE30",
                  "#7BDCB5",
                  "#00D084",
                  "#028128",
                  "#8ED1FC",
                  "#0693E3",
                  "#ABB8C3",
                  "#EB144C",
                  "#F78DA7",
                  "#9900EF",
                  "#770888",
                  "#000000",
                ]}
              />
            )}
          </div>
        </div>
        <div
          style={{
            width: "2px",
            margin: "0 4px",
          }}
        />
        <div>
          <MenuButton
            onClick={() => handleDelete(x, y)}
            style={{ background: "red", color: "white", border: "none" }}
          >
            <Delete />
          </MenuButton>
        </div>
      </div>
    </Menu>
  );
};

export default TextMenu;
