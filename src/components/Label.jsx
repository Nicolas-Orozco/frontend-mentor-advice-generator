import React, { useContext } from "react";
import AppContext from "./AppContext";

function Label() {
  const { data, loading, error } = useContext(AppContext);
  return (
    <nav>
      <h1 className="mt-5 text-green text-xs uppercase tracking-[0.25rem]">
        Advice #{error ? "error" : loading ? "???" : data && data.slip.id}
      </h1>
    </nav>
  );
}

export default Label;
