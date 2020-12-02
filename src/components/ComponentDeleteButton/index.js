import React from "react";
import { Container, HeaderButton, Delete } from "./styles";

const ComponentDeleteButton = ({ y, x, color, handleDelete }) => {
  return (
    <Container x={x} y={y}>
      <HeaderButton
        // onClick={() => handleDelete()}
        // style={{ background: "none", color: "red", border: "none" }}
        color={color}
      >
        <Delete />
      </HeaderButton>
    </Container>
  );
};

export default ComponentDeleteButton;
