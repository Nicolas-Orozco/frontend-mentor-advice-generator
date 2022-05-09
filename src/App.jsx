import React from "react";
import Label from "./components/Label";
import Advice from "./components/Advice";
import Divider from "./components/Divider";
import Button from "./components/Button";

function App() {
  return (
    <section className="max-w-lg p-5 m-4 rounded-lg bg-blue-200 font-manrope flex flex-col items-center justify-center flex-1">
      <Label />
      <Advice />
      <Divider />
      <Button />
    </section>
  );
}

export default App;
