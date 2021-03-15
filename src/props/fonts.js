import React from "react";

const fontFamily = [
  "Arial",
  "Comfortaa",
  "Dancing Script",
  "Josefin Sans",
  "Lobster Two",
  "Righteous",
  "Roboto",
  "Quicksand",
  "Cormorant Garamond",
];

const fonts = (handleFontChange) => {
  return fontFamily.map((font) => {
    return (
      <p style={{ fontFamily: font }} onClick={() => handleFontChange(font)}>
        {font}
      </p>
    );
  });
};

const sizes = (handleFontSizeChange) => {
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

export { sizes };
export default fonts;
