import React from "react";
import "../css/global.css";
import { useState } from "react";
import Test from "./test";
import Test2 from "./test1";

export function toBeCalc() {
  try {
    return "Your calculation result here";
    //your calculation here function here
  } catch (e) {
    console.log("Error: " + e);
    return e;
  }
}
export default function Main() {
  //const [pages, setpages] = useState(0);
  function renderSwitch(pages) {
    switch (pages) {
      case 0:
        return <Test />;
      case 1:
        return <Test2 />;
      default:
        <Test />;
        break;
    }
  }
  const [numbers, setNumbers] = useState([0, 0]);
  function toCalc() {
    let n = numbers[0] + numbers[1];
    return n;
  }

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };
  return (
    <>
      <div className="mainWrapper">
        <form className="mainForm" action="">
          <h2 className="formHeader">Base 2 to 10</h2>
          <input
            placeholder="first field"
            type="number"
            value={numbers[0] || ""}
            onChange={(e) => handleNumberChange(0, parseInt(e.target.value))}
          />
          <input
            placeholder="seconds field"
            type="number"
            value={numbers[1] || ""}
            onChange={(e) => handleNumberChange(1, parseInt(e.target.value))}
          />
          <div className="toCalc">
            <h1>Calculate</h1>
          </div>
          <div className="showResult">{toBeCalc()}</div>
          <i className="underCalc"></i>
        </form>
        {/* <div className="mainHeroRender">
        {renderSwitch(0)}
        </div> */}
      </div>
    </>
  );
}
