import { Font } from "../font";
import {
  Footer,
  Backbutton,
  TextComponent,
  InputComponent,
  Examtype,
  Subjects,
  Labs,
} from "../src/components";
import React, { useState } from "react";

import formdata from "../Dataforcreatesche"

export const Dropdown = () => {
console.log(formdata)
  const Subject = [
    {
      subjectId: "19QSA011",
      subjectName: "Measurement and Instrumentation",
    },
    {
      subjectId: "19HSM002",
      subjectName: "Electrical Machines",
    },
    {
      subjectId: "19ASR008",
      subjectName: "Power Systems",
    },
    {
      subjectId: "19CTR105",
      subjectName: "Microcontrollers",
    },
    {
      subjectId: "19MNS202",
      subjectName: "Control Systems",
    },
  ];

  const [sName, setSName] = useState(Subject[0].subjectName);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSName(event.target.value);
  };
  return (
    <div
      style={{
        boxSizing: "borderBox",
        display: "flex",
        flexDirection: "row",
        justifycontent: "center",
        alignitems: "center",
      }}
    >
      <select
        value={sName}
        onChange={handleChange}
        style={{
          boxSizing: "borderBox",
          display: "flex",
          flexDirection: "row",
          justifycontent: "center",
          alignitems: "center",
          MarginLeft: "0px",
          // gap: "8px",
          width: "181px",
          height: "56px",
          paddingleft: "10px",
          color: "#ABA9AE",
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          margin: '0 18px 0 0'
        }}
      >
        {Subject.map((sub) => {
          return <option style={{
            padding: "0 0 0 18px",
            backgroundColor:"#5375E2"
          }} value={sub.subjectName}>{sub.subjectId}</option>;
        })}
        {/* <option>19QSA001</option>
         <option>19HSM002</option>
        <option>19ESR008</option>
        <option>19ETR105</option>
        <option>19MNS202</option> */}
      </select>
      <Subjectname sName={sName} />
    </div>
  );
};

export const Sub = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        gap: "18px",
        width: "344px",
        height: "56px",
      }}
    >
      <Dropdown />
      {/* <Subjectname /> */}
      <Date />
      {/* <FN />
      <AN /> */}
      <FNAN />
    </div>
  );
};


export const FNAN = () => {
  const [activeButtonFN, setActiveButtonFN] = useState(false);
  const [activeButtonBN, setActiveButtonBN] = useState(false);
  const fnClick = () => {
    activeButtonFN == activeButtonBN ? setActiveButtonFN(true) : setActiveButtonFN(false);
  };

  const bnClick = () => {
    activeButtonBN == activeButtonFN ? setActiveButtonBN(true) : setActiveButtonBN(false);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      gap: "18px",
    }}>
    <button
      onClick={fnClick}
      style={{
        boxSizing: "border-box",
        height: "56px",
        width: "22.05px",
        borderRadius: "5px",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "17px 36px 11PX 20PX",
        background: `${activeButtonFN ==true ? "#5375E2" : "white"}`,
        color: `${activeButtonFN == false ? "#5375E2" : "white"}`,
        // color:"#5375E2",
      }}
    >
      FN
    </button>
    <button
      onClick={bnClick}
      style={{
        boxSizing: "border-box",
        height: "56px",
        width: "22.05px",
        borderRadius: "5px",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "17px 36px 11PX 20PX",
        background: `${activeButtonBN == true ? "#5375E2" : "white"}`,
        color: `${activeButtonBN == false ? "#5375E2" : "white"}`,
        // color:"#5375E2",
      }}
    >
      AN
    </button>
    </div>
  );
};

export const FN = () => {
  const [activeButton, setActiveButton] = useState(false);
  const fnClick = () => {
    activeButton == false ? setActiveButton(true) : setActiveButton(false);
  };

  return (
    <button
      onClick={fnClick}
      style={{
        boxSizing: "border-box",
        height: "56px",
        width: "22.05px",
        borderRadius: "5px",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "17px 36px 11PX 20PX",
        background: `${activeButton == true ? "#5375E2" : "white"}`,
        color: `${activeButton == false ? "#5375E2" : "white"}`,
        // color:"#5375E2",
      }}
    >
      FN
    </button>
  );
};
export const AN = () => {
  const [activeButton, setActiveButton] = useState(false);
  const anClick = () => {
    activeButton == false ? setActiveButton(true) : setActiveButton(false);
  };
  return (
    <button
      onClick={anClick}
      style={{
        boxSizing: "border-box",
        height: "56px",
        width: "22.05px",
        borderRadius: "5px",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "17px 36px 11PX 20PX",
        background: `${activeButton == true ? "#5375E2" : "white"}`,
        color: `${activeButton == false ? "#5375E2" : "white"}`,
      }}
    >
      AN
    </button>
  );
};
export const Date = () => {
  return (
    <div>
      <TextComponent styleProps={{ marginTop: "-23px" }} label="Date" />
      <input
        type="date"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "260px",
          height: "56px",
          borderRadius: "4px",
          color: "#ABA9AE",
        }}
      />
    </div>
  );
};
export const Subjectname = (sName) => {

  console.log(sName);
  return (
    <div>
      <input
        type="text"                      
        label=""
        value= {sName.sName}
        readOnly
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "423px",
          height: "56px",
          gap: "9px",
          backgroundColor: "#F2F2F2",
          borderColour: "#F2F2F2",
          borderRadius: "5px",
          border: "1px solid #FFFFFF",
          color: "#ABA9AE",
          padding: '0 0 0 20px'
        }}
        />
    </div>
  );
};


