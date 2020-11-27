import React, { useState } from "react";
import PropTypes from "prop-types";
import DropDownMenu from "../DropDownMenu";
import {
    Header,
    HeaderButton,
    FixedButtons,
    LineWeightSpan,
} from "./styles";
import { ReactComponent as Bold } from "../../imgs/header/bold.svg";
import { ReactComponent as Underline } from "../../imgs/header/underline.svg";
import { ReactComponent as Italic } from "../../imgs/header/italic.svg";
import { ReactComponent as LineWeight } from "../../imgs/header/lineweight.svg";
import { ReactComponent as Save } from "../../imgs/header/save.svg";
import { ReactComponent as Options } from "../../imgs/header/options.svg";
import { ReactComponent as Mobile } from "../../imgs/header/mobile.svg";
import { ReactComponent as Drop } from "../../imgs/header/drop.svg";

import { TwitterPicker } from "react-color";


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
    const fonts = [
        {
            family: "Arial",
        },
        {
            family: "Comfortaa",
        },
        {
            family: "Dancing Script",
        },
        {
            family: "Josefin Sans",
        },
        {
            family: "Lobster Two",
        },
        {
            family: "Righteous",
        },
        {
            family: "Roboto",
        },
        {
            family: "Quicksand",
        },
    ];
    const [renderDropDown, setRenderDropDown] = useState(false);
    const [renderDropDownFontSize, setRenderDropDownFontSize] = useState(false);
    const [renderDropDownFont, setRenderDropDownFont] = useState(false);
    const [renderColorPicker, setRenderColorPicker] = useState(false);
    const toggleColorPicker = () => {
        if (renderColorPicker === false) return setRenderColorPicker(true);
        return setRenderColorPicker(false);
    };
    const renderLineSpan = () => {
        let lines = [];
        for (let i = 1; i <= 10; i++) {
            lines.push(
                <div onClick={() => handleBrushRadiusChange(i)}>
                    <LineWeightSpan
                        title={`Espessura: ${i}px`}
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
        let families = [];
        fonts.map((font) => {
            families.push(
                <p
                    style={{ fontFamily: font.family }}
                    onClick={() => handleFontChange(font.family)}
                >
                    {font.family}
                </p>
            );
        });
        return families;
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

    const handleColorChange = (color, event) => {
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
                    <HeaderButton
                        className={bold ? "active" : ""}
                        onClick={() => toggleBold()}
                    >
                        <Bold />
                    </HeaderButton>
                    <HeaderButton
                        className={underlined ? "active" : ""}
                        onClick={() => toggleUnderlined()}
                    >
                        <Underline />
                    </HeaderButton>
                    <HeaderButton
                        className={italic ? "active" : ""}
                        onClick={() => toggleItalic()}
                    >
                        <Italic />
                    </HeaderButton>
                    <HeaderButton
                        onClick={() => toggleDropdownFontSize()}
                        hasDropDown
                        className={"has-label"}
                    >
                        <span>{fontSize}</span>
                    </HeaderButton>
                    <HeaderButton
                        onClick={() => toggleDropdownFont()}
                        hasDropDown
                        style={{ fontFamily: font, fontWeight: "thin" }}
                        className={"has-label"}
                    >
                        <span>{font}</span>
                    </HeaderButton>
                    <HeaderButton onClick={() => toggleDropdown()} hasDropDown>
                        <LineWeight />
                    </HeaderButton>
                    <HeaderButton onClick={() => toggleColorPicker()}>
                        <Drop></Drop>
                    </HeaderButton>
                    <HeaderButton
                        color={color}
                        height={brushRadius + 5}
                    ></HeaderButton>
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
            {renderDropDown && <DropDownMenu>{renderLineSpan()}</DropDownMenu>}
            {renderDropDownFontSize && (
                <DropDownMenu>{renderFontSize()}</DropDownMenu>
            )}
            {renderDropDownFont && (
                <DropDownMenu>{renderFontFamily()}</DropDownMenu>
            )}

            {/* {renderDropDownFont && (
                <DropDownMenu>
                    <p>Salvar como PDF</p>
                    <p>Salvar como PNG</p>
                </DropDownMenu>
            )} */}
            {renderColorPicker && (
                <TwitterPicker onChangeComplete={handleColorChange} />
            )}
        </>
    );
};
AppHeader.propTypes = {
    setBrushRadius: PropTypes.func,
    setGrid: PropTypes.func,
    setColor: PropTypes.func,
};
export default AppHeader;
