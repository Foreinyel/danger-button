import React from "react";
import css from "./Component.less";

export interface DangerButtonProps {
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export const Component = (props: DangerButtonProps) => {
  return (
    <button onClick={props.onClick} className={css.dangerButton}>
      {props.children}
    </button>
  );
};

export default Component;
