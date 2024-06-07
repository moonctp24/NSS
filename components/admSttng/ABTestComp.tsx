import { useEffect, useState } from "react";

const ABTestComp = () => {
  useEffect(() => {
    let date = new Date();
    const nowSec = date.getMilliseconds();
    console.log(nowSec);

    if (nowSec % 2 === 0) {
      console.log("직수");
      setAGroup(true);
    } else {
      console.log("홀수");
      setAGroup(false);
    }
  }, []);
  const [aGroup, setAGroup] = useState(false);

  return (
    <>
      <div className="mainComponent">
        <h1>AB Test</h1>
        {aGroup ? (
          <div>
            <button>this is A button</button>
          </div>
        ) : (
          <div>
            <button className="bg-violet-400">this is B button</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ABTestComp;
