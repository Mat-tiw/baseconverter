import React from "react";
import "../css/global.css";
import { useState } from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
export default function Main() {
  const [numbers, setNumbers] = useState([0, 0]);

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };
  const [value, setValue] = useState("2->10");
  const [sumResult, setsumResult] = useState();
  function calculationController(numberToConvert) {
    let convertingResult;
    if (value === "2->8") {
      convertingResult = convertBinaryToOctalt(numberToConvert);
    } else if (value === "2->10") {
      convertingResult = binaryToDecimal(numberToConvert);
    } else if (value === "2->16") {
      convertingResult = binaryToHexadecimal(numberToConvert);
    } else if (value === "8->2") {
      convertingResult = octalToBinary(numberToConvert);
    } else if (value === "8->10") {
      convertingResult = octalToDecimal(numberToConvert);
    } else if (value === "8->16") {
      convertingResult = octalToHexadecimal(numberToConvert);
    } else if (value === "10->2") {
      convertingResult = decimalToBinary(numberToConvert);
    } else if (value === "10->8") {
      convertingResult = decimalToOctal(numberToConvert);
    } else if (value === "10->16") {
      convertingResult = decimalToHexadecimal(numberToConvert);
    } else if (value === "16->2") {
      convertingResult = hexadecimalToBinary(numberToConvert);
    } else if (value === "16->10"){
      convertingResult = hexadecimalToDecimal(numberToConvert);
    } else if (value === "16->8"){
      convertingResult = hexadecimalToOctal(numberToConvert);
    }
    setsumResult(convertingResult);
  }
  return (
    <>
      <div className="mainWrapper">
        <form className="mainForm" action="">
          <div className="leftside">
            <h1 className="main_function_caller">{value}</h1>
            <h2 className="formHeader">Base converter</h2>
            <input
              placeholder="number to convert here"
              type="text"
              value={numbers[0] || ""}
              onChange={(e) => handleNumberChange(0, e.target.value)}
            />
            <div className="toCalc">
              <Button onClick={() => calculationController(numbers[0])}>
                Calculate
              </Button>
            </div>
            <div className="showResult">Result = {sumResult}</div>
          </div>
          <div className="rightside">
            <h2>Base 2</h2>
            <div className="firstrow-wrapper">
              <ToggleButtonGroup
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <Button value="2->8" {...console.log(value)}>
                  2 to 8
                </Button>
                <Button value="2->10" {...console.log(value)}>
                  2 to 10
                </Button>
                <Button value="2->16" {...console.log(value)}>
                  2 to 16
                </Button>
              </ToggleButtonGroup>
            </div>
            <div className="secondrow-wrapper">
              <h2>Base 8</h2>
              <ToggleButtonGroup
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <Button value="8->2" {...console.log(value)}>
                  8 to 2
                </Button>
                <Button value="8->10" {...console.log(value)}>
                  8 to 10
                </Button>
                <Button value="8->16" {...console.log(value)}>
                  8 to 16
                </Button>
              </ToggleButtonGroup>
            </div>
            <div className="thridrow-wrapper">
              <h2>Base 10</h2>
              <ToggleButtonGroup
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <Button value="10->2" {...console.log(value)}>
                  10 to 2
                </Button>
                <Button value="10->8" {...console.log(value)}>
                  10 to 8
                </Button>
                <Button value="10->16" {...console.log(value)}>
                  10 to 16
                </Button>
              </ToggleButtonGroup>
            </div>
            <div className="fourthrow-wrapper">
              <h2>Base 16</h2>
              <ToggleButtonGroup
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <Button value="16->2" {...console.log(value)}>
                  16 to 2
                </Button>
                <Button value="16->8" {...console.log(value)}>
                  16 to 8
                </Button>
                <Button value="16->10" {...console.log(value)}>
                  16 to 10
                </Button>
              </ToggleButtonGroup>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export function isValidBinary(binary) {
  return /^[01]+$/.test(binary);
}
export function convertBinaryToOctalt(binary) {
  try {
    if (!isValidBinary(binary)) {
      throw new Error("Invalid binary number");
    }

    let decimalNumber = 0;
    let base = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
      if (binary[i] === "1") {
        decimalNumber += base;
      }
      base *= 2;
    }

    let octalString = "";
    while (decimalNumber > 0) {
      octalString = (decimalNumber % 8) + octalString;
      decimalNumber = Math.floor(decimalNumber / 8);
    }

    return octalString || "0";
  } catch (error) {
    throw new Error("Invalid binary number");
  }
}
export function binaryToDecimal(binary) {
  let decimalNumber = 0;
  if (!isValidBinary(binary)) {
    return "Invalid binary number";
  }
  try {
    const binaryLength = binary.length;

    for (let i = binaryLength - 1; i >= 0; i--) {
      const binaryDigit = parseInt(binary[i]);

      if (isNaN(binaryDigit) || (binaryDigit !== 0 && binaryDigit !== 1)) {
        throw new Error(
          "Invalid binary number. Please provide a valid binary number."
        );
      }

      const power = binaryLength - 1 - i;
      decimalNumber += binaryDigit * Math.pow(2, power);
    }
  } catch (error) {
    return error;
  }

  return decimalNumber;
}
export function binaryToHexadecimal(binaryNumber) {
  if (!isValidBinary(binaryNumber)) {
    return "Invalid binary number";
  }

  const binaryLength = binaryNumber.length;
  let decimalNumber = 0;

  for (let i = 0; i < binaryLength; i++) {
    const binaryDigit = Number(binaryNumber[i]);
    decimalNumber = decimalNumber * 2 + binaryDigit;
  }

  let hexadecimalNumber = decimalToHexadecimal(decimalNumber);
  return hexadecimalNumber;
}

export function isValidOctal(octalNumber) {
  return /^[0-7]+$/.test(octalNumber);
}
export function octalToBinary(octalNumber) {
  if (!isValidOctal(octalNumber)) {
    return "Invalid octal number";
  }

  let binaryNumber = "";

  for (let i = 0; i < octalNumber.length; i++) {
    const octalDigit = Number(octalNumber[i]);
    let remainingOctalDigit = octalDigit;

    for (let j = 0; j < 3; j++) {
      const binaryDigit = remainingOctalDigit % 2;
      binaryNumber = binaryDigit + binaryNumber;
      remainingOctalDigit = Math.floor(remainingOctalDigit / 2);
    }
  }

  binaryNumber = binaryNumber.replace(/^0+/, "");

  if (binaryNumber === "") {
    binaryNumber = "0";
  }

  return binaryNumber;
}
export function octalToDecimal(octalNumber) {
  if (!isValidOctal(octalNumber)) {
    return "Invalid octal number";
  }

  const octalLength = octalNumber.length;
  let decimalNumber = 0;

  for (let i = 0; i < octalLength; i++) {
    const octalDigit = Number(octalNumber[i]);
    if (isNaN(octalDigit) || octalDigit < 0 || octalDigit > 7) {
      throw new Error(
        "Invalid octal number. Please provide a valid octal number."
      );
    }

    const power = octalLength - 1 - i;
    decimalNumber += octalDigit * Math.pow(8, power);
  }

  return decimalNumber;
}
export function octalToHexadecimal(octalNumber) {
  if (!isValidOctal(octalNumber)) {
    return "Invalid octal number";
  }

  const decimalNumber = octalToDecimal(octalNumber);
  const hexadecimalNumber = decimalToHexadecimal(decimalNumber);

  return hexadecimalNumber;
}
export function isValidDecimal(decimalNumber) {
  return /^0$|^[1-9][0-9]*$/.test(decimalNumber);
}
export function decimalToBinary(decimalNumber) {
  if (!isValidDecimal(decimalNumber)) {
    return "Invalid base 10 number";
  }

  decimalNumber = Number(decimalNumber);
  let binaryNumber = "";

  while (decimalNumber !== 0) {
    const binaryDigit = decimalNumber % 2;
    binaryNumber = binaryDigit + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  if (binaryNumber === "") {
    binaryNumber = "0";
  }

  return binaryNumber;
}
export function decimalToOctal(decimalNumber) {
  if (!isValidDecimal(decimalNumber)) {
    return "Invalid base 10 number";
  }

  decimalNumber = Number(decimalNumber);
  let octalNumber = "";

  while (decimalNumber !== 0) {
    const octalDigit = decimalNumber % 8;
    octalNumber = octalDigit + octalNumber;
    decimalNumber = Math.floor(decimalNumber / 8);
  }

  if (octalNumber === "") {
    octalNumber = "0";
  }

  return octalNumber;
}
export function decimalToHexadecimal(decimalNumber) {
  const hexadecimalDigits = "0123456789ABCDEF";
  let hexadecimalString = "";

  while (decimalNumber > 0) {
    const remainder = decimalNumber % 16;
    hexadecimalString = hexadecimalDigits[remainder] + hexadecimalString;
    decimalNumber = Math.floor(decimalNumber / 16);
  }

  if (hexadecimalString === "") {
    hexadecimalString = "0";
  }

  return hexadecimalString;
}
export function isValidHexadecimal(hexadecimalNumber) {
  return /^[0-9A-Fa-f]+$/.test(hexadecimalNumber);
}
export function hexadecimalToBinary(hexadecimalNumber) {
  if (!isValidHexadecimal(hexadecimalNumber)) {
    return "Invalid hexadecimal number";
  }
  let decimalNumber = hexadecimalToDecimal(hexadecimalNumber);
  let binaryNumber = decimalToBinary(decimalNumber);

  return binaryNumber;
}
export function hexadecimalToOctal(hexadecimalNumber) {
  if (!isValidHexadecimal(hexadecimalNumber)) {
    return "Invalid hexadecimal number";
  }
  const decimalNumber = hexadecimalToDecimal(hexadecimalNumber);
  const octalNumber = decimalToOctal(decimalNumber);
  return octalNumber;
}
export function hexadecimalToDecimal(hexadecimalNumber) {
  const hexToDecimalLookup = {
    0: 0, 1: 1, 2: 2, 3: 3,
    4: 4, 5: 5, 6: 6, 7: 7,
    8: 8, 9: 9, A: 10, B: 11,
    C: 12, D: 13, E: 14, F: 15
  };

  let decimalNumber = 0;
  const hexadecimalLength = hexadecimalNumber.length;

  for (let i = 0; i < hexadecimalLength; i++) {
    const hexadecimalDigit = hexadecimalNumber[i].toUpperCase();
    if (!hexToDecimalLookup.hasOwnProperty(hexadecimalDigit)) {
      return "Invalid hexadecimal digit";
    }
    const digitValue = hexToDecimalLookup[hexadecimalDigit];
    decimalNumber += digitValue * Math.pow(16, hexadecimalLength - 1 - i);
  }

  return decimalNumber;
}