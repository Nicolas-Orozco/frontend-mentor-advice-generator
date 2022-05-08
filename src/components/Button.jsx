import React from "react";
import { ReactComponent as Logo } from "../assets/icon-dice.svg";

function Button() {
  return (
    <button
      type="submit"
      className="bg-green p-4 rounded-full transition-all duration-300 hover:shadow-[0px_0px_30px_0px_rgba(82,255,169,80)] focus:outline-none focus:ring focus:ring-emerald-600"
    >
      <Logo aria-hidden="true" tabindex="0" />
      <span className="h-[1px] w-[1px] overflow-hidden absolute">
        Click for advice
      </span>
    </button>
  );
}

export default Button;
