import React from "react";
import { Button } from "./styles";

const HeaderButton = ({
  color,
  height,
  active,
  hasDropDown,
  dropDownActive,
  children,
  onClickFunction,
}) => {
  return (
    <Button
      color={color}
      height={height}
      hasDropDown={hasDropDown}
      dropDownActive={dropDownActive}
      className={active ? "active" : ""}
      onClick={() => onClickFunction()}
    >
      {children}
    </Button>
  );
};

export default HeaderButton;
