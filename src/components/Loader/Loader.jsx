import React from "react";
import { DotSpinner } from "@uiball/loaders";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "500px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <DotSpinner size={100} speed={0.9} color="white" />
      </div>
    </div>
  );
};
