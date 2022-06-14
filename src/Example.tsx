import React from "react";
import Component from "./Component";

export const Example = () => {
  return (
    <div>
      <Component
        onClick={() => {
          alert("danger button clicked");
        }}
      >
        Danger Button
      </Component>
    </div>
  );
};

export default Example;
