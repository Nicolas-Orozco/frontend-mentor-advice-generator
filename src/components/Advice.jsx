import React, { useContext } from "react";
import AppContext from "./AppContext";

function Advice() {
  const { data, loading, error } = useContext(AppContext);
  return (
    <h2 className="my-5 text-2xl text-center text-cyan break-words">
      &quot;
      {error
        ? error.message
        : loading
        ? "Loading..."
        : data && data.slip.advice}
      &quot;
    </h2>
  );
}

export default Advice;
