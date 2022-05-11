import React, { useMemo } from "react";
import useAxios from "axios-hooks";
import AppContext from "./components/AppContext";
import Label from "./components/Label";
import Advice from "./components/Advice";
import Attribution from "./components/Attribution";
import Button from "./components/Button";

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.adviceslip.com/advice"
  );
  return (
    <AppContext.Provider
      value={useMemo(
        () => ({ data, loading, error, refetch }),
        [data, loading, error, refetch]
      )}
    >
      <div className="max-w-lg p-5 m-4 rounded-lg bg-blue-100 font-manrope flex flex-col items-center justify-center flex-1">
        <Label />
        <Advice />
        <Button />
        <Attribution />
      </div>
    </AppContext.Provider>
  );
}

export default App;
