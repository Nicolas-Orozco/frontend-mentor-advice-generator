import React from "react";
import { ReactComponent as Logo } from "../assets/icon-dice.svg";

function Button() {
  return (
    <button
      type="button"
      className="w-16 h-16 relative top-7 mb-[-1.5rem] bg-green rounded-[100%] transition-all duration-200  hover:shadow-[0px_0px_30px_0px_rgba(82,255,169,80)] focus:outline-none focus:ring focus:ring-emerald-600 motion-reduce:transition-none motion-reduce:hover:shadow-none motion-reduce:hover:bg-emerald-400"
    >
      <Logo aria-hidden="true" tabIndex="0" className="m-auto" />
      <span className="h-[1px] w-[1px] overflow-hidden absolute">
        Click for advice
      </span>
    </button>
  );
}

export default Button;
