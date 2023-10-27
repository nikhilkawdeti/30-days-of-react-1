import React from "react";
import tailwind from '../../index.css'
import htmlLogo from "../../assets/html-logo.jpg";
import cssLogo from "../../assets/css-logo.png";
import jsLogo from "../../assets/js-logo.png";
import reactLogo from "../../assets/react-logo.png";

export function Container() {
  return (
    <>
      <div className="">
        <ul
          className="flex flex-row"
          style={{ listStyle: "none" }}
        >
          <li className="">
            <img src={htmlLogo} alt="" srcset="" width={100} height={100} />
          </li>
          <li className="">
            <img src={cssLogo} alt="" srcset="" width={100} height={100} />
          </li>
          <li className="">
            <img src={jsLogo} alt="" srcset="" width={100} height={100} />
          </li>
          <li className="">
            <img src={reactLogo} alt="" srcset="" width={100} height={100} />
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
      <h1>hello from d4 l2 ex1</h1>
      <h3 style={h3Center}>Front End Tech</h3>
      <Container />
    </>
  );
}
