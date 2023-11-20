import React from "react";

function Example(Props) {
  return (
    <>
      <h3> name : {Props.name} </h3>
    </>
  );
}

const ExampleNum = (Props) => {
  return <h2>age: {Props.age}</h2>;
};

export default function PropsMain() {
  return (
    <>
      example of props
      <Example name="string example" />
      <ExampleNum age="233" />
    </>
  );
}
