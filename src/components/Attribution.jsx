import React from "react";

function Attribution() {
  return (
    <footer className="absolute bottom-0 font-manrope text-white md:text-base text-sm text-center">
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-blue-400 font-bold underline"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://github.com/Nicolas-Orozco"
        className="text-orange-400 font-bold underline"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Nicolas Orozco
      </a>
      .
    </footer>
  );
}

export default Attribution;
