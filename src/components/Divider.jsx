import React from "react";

function Divider() {
  return (
    <div
      role="img"
      aria-label="Advice divider"
      className="w-full h-6 bg-contain bg-center bg-no-repeat bg-[url('/src/assets/pattern-divider-mobile.svg')] lg:bg-[url('/src/assets/pattern-divider-desktop.svg')]"
    />
  );
}

export default Divider;
