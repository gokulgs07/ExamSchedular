import { Font } from "../font";
import {
  Footer,
  Backbutton,
  TextComponent,
  InputComponent,
  Examtype,
  Subjects,
  Labs
} from "../src/components";
import React, { useState } from "react";
import { Header, Box, Branch, Department, Semester } from "../src/components";




  export const Dropdown = () => {
  
    return (
      <div >
        <select style={{
            boxSizing: "borderBox",
            display: "flex",
            flexDirection: "row",
            justifycontent: "center",
            alignitems: "center",
            MarginLeft:"0px",
            gap: "8px",
            width: "181px",
            height: "56px",
           paddingleft:"10px",
            color: "#ABA9AE",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px"
        }}>
         
         <option>19QSA001</option>
         <option>19HSM002</option>
        <option>19ESR008</option>
        <option>19ETR105</option>
        <option>19MNS202</option>
        
         
        </select>
      </div>
    );
  };

 export const Sub=()=> {
    return(
        <div style={{display: "flex",
        flexDirection: "row",
       
        alignItems: "center",
      
        gap: "18px",
        width: "344px",
        height: "56px"}}>
            <Dropdown />
            <Subjectname/>
            <Date/> 
            
            <FN/>
            <AN/>
            
           
           
        </div>
    )
}

export const FN = () => {
  return <button onClick=" " style={{
    boxSizing: "border-box",
        height: "56px",
        width: "22.05px",
        borderRadius:"5px",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "17px 36px 11PX 20PX",
        background:"white",
        color:"#5375E2"
      
  }}>FN</button>;
};
export const AN = () => {
  return <button onClick=" "  
  style={{
    boxSizing: "border-box",
    height: "56px",
    width: "22.05px",
    borderRadius:"5px",
    border: " 1px solid #5375E2",
    borderRadius: "5px",
    padding: "17px 36px 11PX 20PX",
    background:"white",
    color:"#5375E2"
  }}>AN</button>;
};
export const Date=()=>
  {   return <div>
  <TextComponent styleProps={{marginTop:"-23px"}}
             label="Date"/>
            <input 
            
                type="date"  style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5E5",
                width:"260px",
                height:"56px",
                borderRadius: "4px",
                color: "#ABA9AE",

            }}/>
            
              </div>
  }
export const Subjectname = () => {
  return(
    <div>
   
      <InputComponent
      type="text"
             placeholder="Measurment and instruction"
             
             style={{display:"flex",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",


width: "423px",
height: "56px",
backgroundColor: "#F2F2F2",
borderColour:"#F2F2F2",
borderRadius:"5px",
border:"1px solid #FFFFFF",
color: "#ABA9AE"
}}

          />
          </div>)}
