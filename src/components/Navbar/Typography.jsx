import React from "react";

const Typography = ({ sx, text }) => {
  return (
    <p
      style={{
        color: sx.color,
        fontFamily: sx.fontFamily,
        fontSize: sx.fontSize,
        fontWeight: sx.fontWeight,
        wordWrap: sx.wordWrap,
        lineHeight: sx.lineHeight,
      }}
    >
      {text}
    </p>
  );
};

export default Typography;
