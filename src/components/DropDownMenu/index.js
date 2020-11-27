import React from "react";

import { DropDownDiv } from "./styles";

const DropDownMenu = (props) => {
    return <DropDownDiv>{props.children}</DropDownDiv>;
};

export default DropDownMenu;
