import React, { useState } from "react";
import PropTypes from "prop-types";
import DropDownMenu from "../DropDownMenu";
import { Header, FixedButtons, LineWeightSpan } from "./styles";
import {
  Bold,
  Underline,
  Italic,
  LineWeight,
  Save,
  Options,
  Mobile,
  Drop,
} from "../../props/svg-lib";

import fonts, { sizes } from "../../props/fonts";
import colors from "../../props/colors";

import { TwitterPicker } from "react-color";
import HeaderButton from "../HeaderButton";
const AppHeader = ({
  brushRadius,
  setBrushRadius,
  setFontSize,
  setColor,
  setFont,
  color,
  fontSize,
  font,
  bold,
  setBold,
  underlined,
  setUnderlined,
  italic,
  setItalic,
  handlePrint,
}) => {
  const [renderDropDownFontSize, setRenderDropDownFontSize] = useState(false);
  const [renderDropDownLine, setRenderDropDownLine] = useState(false);
  const [renderDropDownFont, setRenderDropDownFont] = useState(false);
  const [renderColorPicker, setRenderColorPicker] = useState(false);
  const [renderOptions, setRenderOptions] = useState(false);
  const renderLineSpan = () => {
    let lines = [];
    for (let i = 1; i <= 10; i++) {
      lines.push(
        <div onClick={() => handleBrushRadiusChange(i)}>
          <LineWeightSpan
            title={`Espessura da linha: ${i}px`}
            height={`${i + 2}px`}
          />
        </div>
      );
    }
    return lines;
  };
  const toggleDropdownLine = () => {
    setRenderDropDownLine(!renderDropDownLine);
    setRenderDropDownFont(false);
    setRenderDropDownFontSize(false);
    setRenderColorPicker(false);
  };

  const toggleDropdownFontSize = () => {
    setRenderDropDownFontSize(!renderDropDownFontSize);
    setRenderDropDownLine(false);
    setRenderDropDownFont(false);
    setRenderColorPicker(false);
  };

  const toggleDropdownFont = () => {
    setRenderDropDownFont(!renderDropDownFont);
    setRenderDropDownLine(false);
    setRenderDropDownFontSize(false);
    setRenderColorPicker(false);
  };

  const toggleColorPicker = () => {
    setRenderColorPicker(!renderColorPicker);
    setRenderDropDownFont(false);
    setRenderDropDownLine(false);
    setRenderDropDownFontSize(false);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setRenderColorPicker(!renderColorPicker);
    setRenderDropDownLine(false);
    setRenderDropDownFont(false);
    setRenderDropDownFontSize(false);
  };

  const handleFontChange = (font) => {
    setFont(font);
    toggleDropdownFont();
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    toggleDropdownFontSize();
  };

  const handleBrushRadiusChange = (size) => {
    setBrushRadius(size);
    toggleDropdownLine();
  };

  const toggleBold = () => {
    setBold(!bold);
  };
  const toggleUnderlined = () => {
    setUnderlined(!underlined);
  };
  const toggleItalic = () => {
    setItalic(!italic);
  };

  return (
    <>
      <Header color={color}>
        <div
          style={{
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <HeaderButton active={bold} onClickFunction={toggleBold}>
              <Bold />
            </HeaderButton>
            <HeaderButton
              active={underlined}
              onClickFunction={toggleUnderlined}
            >
              <Underline />
            </HeaderButton>
            <HeaderButton active={italic} onClickFunction={toggleItalic}>
              <Italic />
            </HeaderButton>
            <div>
              <HeaderButton
                onClickFunction={toggleDropdownFont}
                hasDropDown
                dropDownActive={renderDropDownFont}
              >
                <span style={{ fontFamily: font }}>{font}</span>
              </HeaderButton>
              {renderDropDownFont && (
                <DropDownMenu>{fonts(handleFontChange)}</DropDownMenu>
              )}
            </div>
            <div>
              <HeaderButton
                onClickFunction={toggleDropdownFontSize}
                hasDropDown
                dropDownActive={renderDropDownFontSize}
              >
                <span>{fontSize}</span>
              </HeaderButton>
              {renderDropDownFontSize && (
                <DropDownMenu>{sizes(handleFontSizeChange)}</DropDownMenu>
              )}
            </div>
          </div>
          <div>
            <HeaderButton
              onClickFunction={toggleDropdownLine}
              hasDropDown
              dropDownActive={renderDropDownLine}
            >
              <LineWeight />
            </HeaderButton>
            {renderDropDownLine && (
              <DropDownMenu>{renderLineSpan()}</DropDownMenu>
            )}
          </div>
          <div>
            <HeaderButton onClickFunction={toggleColorPicker}>
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
            </HeaderButton>
            {renderColorPicker && (
              <TwitterPicker
                onChangeComplete={handleColorChange}
                colors={colors}
              />
            )}
          </div>
          <HeaderButton color={color} height={brushRadius + 5}></HeaderButton>
        </div>
        <FixedButtons>
          <HeaderButton hasDropDown onClickFunction={() => handlePrint()}>
            <Save />
          </HeaderButton>
          <div>
            <HeaderButton
              hasDropDown
              onClickFunction={() => setRenderOptions(!renderOptions)}
            >
              <Options />
            </HeaderButton>
            {renderOptions && (
              <DropDownMenu>
                <p>Opções</p>
              </DropDownMenu>
            )}
          </div>
          <HeaderButton>
            <Mobile />
          </HeaderButton>
        </FixedButtons>
      </Header>

      {/* {renderDropDownFont && (
        <DropDownMenu>
          <p>Salvar como PDF</p>
          <p>Salvar como PNG</p>
        </DropDownMenu>
      )} */}
    </>
  );
};
AppHeader.propTypes = {
  setBrushRadius: PropTypes.func,
  setGrid: PropTypes.func,
  setColor: PropTypes.func,
};
export default AppHeader;
