import * as React from "react";

function ImgComponent(props) {
  return (
    <img
      src="./logo.png"
      width={27}
      height={40}
      {...props}
    />
  );
}

export default ImgComponent;
