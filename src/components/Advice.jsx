import React, { useContext } from "react";
import AppContext from "./AppContext";

function Advice() {
  const { data, loading, error } = useContext(AppContext);
  return (
    <header>
      <h2 className="my-5 text-2xl text-center text-cyan break-words">
        &quot;
        {error
          ? error.message
          : loading
          ? "Loading..."
          : data && data.slip.advice}
        &quot;
      </h2>
      <div
        aria-label="Advice divider"
        role="img"
        className="w-full h-6 bg-contain bg-center bg-no-repeat bg-[url('/src/assets/pattern-divider-mobile.svg')] lg:bg-[url('/src/assets/pattern-divider-desktop.svg')]"
      />
    </header>
  );
}

export default Advice;
