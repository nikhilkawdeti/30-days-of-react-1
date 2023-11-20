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

// Skills Component
const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>);
  return <ul>{skillList}</ul>;
};

const Age = (props) => <div>The person is {props.age} years old.</div>;
const Weight = (props) => (
  <p className="text-[#3b10c4] text-3xl">
    The weight of the object on earth is {props.weight} N.
  </p>
);

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};

export default function PropsMain() {
  let currentYear = 2023;
  let birthYear = 2010;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  // let currentYear = 2020;
  // let birthYear = 2015;
  // const age = currentYear - birthYear; // 15 years

  let status = age >= 18;

  return (
    <>
      example of props
      <Example name="string example" />
      <ExampleNum age="233" />
      <Skills skills={["HTML", "CSS", "JavaScript", 11, "232"]} />
      <br />
      <h2>Number props type</h2>
      <Age age={age} />
      <Weight weight={gravity * mass} />
      <br />
      <Status status={status} />
    </>
  );
}
