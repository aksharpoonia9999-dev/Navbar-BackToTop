import { useState, useEffect } from "react";

const CounterNew = () => {
  const [countnew, setCountnew] = useState(0);

  useEffect(() => {
    console.log("Current Count:", countnew);
  }, [countnew]);


  return (
    <div className="flex items-center justify-center w-full">
      <div className="counter max-w-125 w-full px-3 h-62.5 sm:h-125 bg-white rounded-24 flex-col gap-5 flex items-center justify-center">
        <p className="text-6xl">{countnew}</p>

        <button
          onClick={() => setCountnew(countnew + 1)}
          className="max-w-75 w-full h-12.5 rounded-full bg-black cursor-pointer text-white"
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default CounterNew;
