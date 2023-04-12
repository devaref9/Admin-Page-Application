import React from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default LoadingSpinner;
