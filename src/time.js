import React from "react";

import { Font } from "../font";
import { TextComponent } from "./components";


export const Time = () => {
    return (
      <div>
        <input
          type="Number"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8E8;",
            width: "43px",
            height: "44px",
            borderRadius: "4px",
            
           }}
           
           placeholder="00"
         
           
        />
      </div>
    );
  };
  //.......................................................checkbox
  export const CheckBox = () => {
    return (
      <div
        className="App"
        style={{
     
          left: "122px",
          top: "183px",
          Width:"24px",
        Height:"24px",
          background: "#FBFBFB",
          borderColor:"blue"
        }}
      >
        <div>
          <input type="checkbox" name="checkbox" value="checkbox" />
        </div>
      </div>
    );
  };