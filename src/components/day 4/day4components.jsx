import React from "react";
// import { ReactDOM } from "react";

const wellcome = "Welcome to 30 Days";

const Header = () => (
  <div className="">
    <h1>{wellcome}</h1>
    {/* <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
  <small>Oct 3, 2020</small> */}
  </div>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    {/* <img alt="" /> */}
    <h2>rea1</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

export default function Main() {
  return (
    <>
      <Header />
      <UserCard />
      <TechList />
      <Footer />
    </>
  );
}
