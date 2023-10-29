import React from "react";
import htmlLogo from "../../assets/html-logo.jpg";
import cssLogo from "../../assets/css-logo.png";
import jsLogo from "../../assets/js-logo.png";
import reactLogo from "../../assets/react-logo.png";

export function Container() {
  return (
    <>
      <div>
        <ul
          className="flex flex-row space-x-6 justify-center"
          style={{ listStyle: "none" }}
        >
          <li className="border-2">
            <img src={htmlLogo} alt="" width={100} height={100} />
          </li>
          <li className="border-2">
            <img src={cssLogo} alt="" width={100} height={100} />
          </li>
          <li className="border-2">
            <img src={jsLogo} alt="" width={100} height={100} />
          </li>
          <li className="border-2">
            <img src={reactLogo} alt="" width={100} height={100} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default function D4l2ex1() {
  const h3Center = {
    textAlign: "center",
  };

  return (
    <>
      <br />
      ------------------------------------------
      <br />
      <h1>hello from d4 l2 ex1</h1>
      <p>Used Tailwind css from here</p>
      <br />
      -------------------------------------------------------------------
      <br />
      <h3 style={h3Center} className="text-3xl font-bold">
        Front End Tech
      </h3>
      <br />
      <Container />
    </>
  );
}
