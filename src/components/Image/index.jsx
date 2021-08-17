import React from "react";
import placeholder from "../../asset/images/placeholder-img.jpg";

const IMAGE_SIZE = 50;

function Image(props) {
  return (
    <img
      src={props.src}
      alt={`logo ${props.src}`}
      width={props.width}
      height={props.height}
    />
  );
}

Image.defaultProps = {
  src: placeholder,
  width: `${IMAGE_SIZE}px`,
  height: `${IMAGE_SIZE}px`,
};

export default Image;
