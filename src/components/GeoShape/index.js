import React from "react";
import PropTypes from "prop-types";
import { Shape, Container } from "./styles";

const GeoShape = ({ color, both, x, y, size, fill }) => {
  return (
    <Container both={both} x={x} y={y}>
      <Shape color={color} both={both} x={x} y={y} size={size} fill={fill} />
    </Container>
  );
};

GeoShape.propTypes = {
  color: PropTypes.string.isRequired,
};
export default GeoShape;
