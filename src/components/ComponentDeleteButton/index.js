import React from "react";
import { Container, Button, Delete } from "./styles";

const ComponentDeleteButton = ({ y, x, color, handleDelete }) => {
  return (
    <Container x={x} y={y}>
      <Button
        onClick={() => handleDelete(x, y + 60)}
        color={color}
      >
        <Delete />
      </Button>
    </Container>
  );
};

export default ComponentDeleteButton;
