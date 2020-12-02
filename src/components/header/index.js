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

import fonts from "../../props/fonts";

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
  const [renderDropDown, setRenderDropDown] = useState(false);
  const [renderDropDownFontSize, setRenderDropDownFontSize] = useState(false);
  const [renderDropDownFont, setRenderDropDownFont] = useState(false);
  const [renderColorPicker, setRenderColorPicker] = useState(false);
  const toggleColorPicker = () => {
    setRenderColorPicker(!renderColorPicker);
  };
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
  const renderFontFamily = () => {
    return fonts.map((font) => {
      return (
        <p style={{ fontFamily: font }} onClick={() => handleFontChange(font)}>
          {font}
        </p>
      );
    });
  };
  const toggleDropdown = () => {
    setRenderDropDown(!renderDropDown);
  };

  const toggleDropdownFontSize = () => {
    setRenderDropDownFontSize(!renderDropDownFontSize);
  };

  const toggleDropdownFont = () => {
    setRenderDropDownFont(!renderDropDownFont);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setRenderColorPicker(!renderColorPicker);
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
    toggleDropdown();
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
        <div>
          <HeaderButton active={bold} onClickFunction={toggleBold}>
            <Bold />
          </HeaderButton>
          <HeaderButton active={underlined} onClickFunction={toggleUnderlined}>
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
              <DropDownMenu>{renderFontFamily()}</DropDownMenu>
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
              <DropDownMenu>{renderFontSize()}</DropDownMenu>
            )}
          </div>
          <div>
            <HeaderButton
              onClickFunction={toggleDropdown}
              hasDropDown
              dropDownActive={renderDropDown}
            >
              <LineWeight />
            </HeaderButton>
            {renderDropDown && <DropDownMenu>{renderLineSpan()}</DropDownMenu>}
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
              <TwitterPicker onChangeComplete={handleColorChange} />
            )}
          </div>
          <HeaderButton color={color} height={brushRadius + 5}></HeaderButton>
        </div>
        <FixedButtons>
          <HeaderButton hasDropDown onClick={() => handlePrint()}>
            <Save />
          </HeaderButton>
          <HeaderButton hasDropDown>
            <Options />
          </HeaderButton>
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
