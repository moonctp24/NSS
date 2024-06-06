import { useState } from "react";

const DevTestComp = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="absolute top-1/2 left-1/2 -mt-[150px] -ml-[200px] ">
      <h1>COUNT TEST</h1>
      <div className="flex">
        <button
          className="w-[100px] h-[70px] text-center text-6xl"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </button>
        <div className="w-[200px] pl-[50px] text-center pr-[50px] text-6xl">{number}</div>
        <button
          className="w-[100px] h-[70px] text-center text-6xl"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DevTestComp;
