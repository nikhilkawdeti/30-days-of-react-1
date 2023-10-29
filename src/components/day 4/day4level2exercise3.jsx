import React from "react";

const MainContainer = () => {
  return (
    <div className={"container mx-auto my-2 p-4 mt-5 rounded-md bg-[#a4b5e6]"}>
      <SecondContainer />
    </div>
  );
};

const SecondContainer = () => {
  return (
    <>
      <div className="container mx-auto rounded-md bg-gray-500">
        <Heading />
      </div>
    </>
  );
};

const Heading = () => {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="text-3xl">SUBSCRIBE</h3>
      </div>
      <div className=" flex justify-center">
        <h4 className="text-[15px]">
          Sign Up With Your Email Address To Receive News And Updates
        </h4>
      </div>
      <Input />
    </>
  );
};

function Input() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mx-4 my-3">
          <input
            type="text"
            className="rounded px-2 py-2"
            placeholder="First Name"
          />
        </div>
        <div className="mx-4 my-3">
          <input
            type="text"
            className="rounded px-2 py-2"
            placeholder="User Name"
          />
        </div>
        <div className="mx-4 my-3">
          <input
            type="email"
            className="rounded px-2 py-2"
            placeholder="Email"
          />
        </div>
      </div>
      <SubscribeButton />
    </>
  );
}

function SubscribeButton() {
  return (
    <>
      <div className="flex justify-center">
        <button className="btn bg-red-600 rounded-md my-2 px-10 py-1 text-2xl">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default function D4l2ex3() {
  return (
    <>
      <MainContainer />
    </>
  );
}
