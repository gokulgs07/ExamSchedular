import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import GlobalStyle from "./Globalstyles";
import { Font } from "../font";
import formdata from "../Dataforcreatesche";
//text component ...............................................................
export const TextComponent = ({
  label,
  value,
  styleProps,
  children,
  CustomTag = "div",
  onchange,
}) => {
  console.log("VALUE : "+ value)
  return (
    <CustomTag onChange={onchange} style={styleProps}>
      {label}
      {children}
    </CustomTag>
  );
};
export const Box = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};
//INPUT COMPO........................................................................
export const InputComponent = (props) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.type === "text" ? "column" : "row",
        padding: "20px",
      }}
    >
      {props.type === "radio" && <input {...props}></input>}
      <TextComponent
        label={props.label}
        CustomTag={props.type === "text" ? "div" : "span"}
      />
      {props.type === "text" && <input {...props} onChange={props?.onchange}/>}
    </div>
  );
};
//footer..................................................................................
export const Footer = () => {
  return (
    <>
      <Font />
      <footer
        style={{
          backgroundColor: "#FBFBFB",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "150px",
          paddingRight: "150px",
          marginTop: "142px",
        }}
      >
        <TextComponent
          style={{
            fontWeight: "200",
            fontSize: "12px",
            lineHeight: "130%",
            width: "1440px",
            height: "42px",
          }}
          label="Conditions of use & sale"
        />

        <TextComponent
          style={{
            fontWeight: "200",
            fontSize: "12px",
            lineHeight: "130%",
            width: "1440px",
            height: "42px",
          }}
          label="Privacy notice"
        />
        <TextComponent
          style={{
            fontWeight: "200",
            fontSize: "12px",
            lineHeight: "130%",
            width: "1440px",
            height: "42px",
          }}
          label="Powered By Incresco"
        />
      </footer>
    </>
  );
};

const Logo = () => {
  return (
    <div
      style={{
        paddingTop: "10px",
        marginLeft: "40px",
        height: "40px",
        width: "40px",
      }}
    >
      <img src="https://i.ibb.co/2S0PzTc/logo.png" alt="LOGO" />
    </div>
  );
};
const Vector = () => {
  return (
    <div
      style={{ 
        display: "flex",
        color: "white",
        padding: "0px 13px 0px 600px",
        width: "40px",
        height: "40px",
        marginTop: "18px",
      }}
    >
      <img src="https://i.ibb.co/ckcWSdS/healthicons-ui-user-profile.png" />
    </div>
  );
};

const Person = () => {
  return (
    <div style={{ padding: "0px 499px 0px 499px" }}>
      <img src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png" />
    </div>
  );
};
//header..............................................................................
export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          backgroundColor: "#5375E2",
          color: "white",
          fontFamily: "Nunito",
          fontWeight: "700",
          margin: "0",
          display: "flex",
          padding: "10px",
          height: "70.95px",
        }}
      >
        <div>
          <Logo />
        </div>
        <div
          style={{
            paddingLeft: "70px",
            paddingTop: "77px",
            paddingRight: "41px",
          }}
        ></div>
        <div style={{ flexDirection: "column" }}>
          <TextComponent
            label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
            styleProps={{
              fontSize: "16px",
              fontFamily: "Nunito",
              textAlign: "center",
              lineHeight: "21.82px",
              paddingTop: "2px",
              marginLeft: "-68px",
            }}
          />
          <br></br>
          <TextComponent
            label="Exam Scheduler"
            styleProps={{
              fontSize: "32px",
              paddingBottom: "15px",
              fontFamily: "Nunito",
              textAlign: "left",
              marginLeft: "-68px",
              marginTop: "-20px",
            }}
          />
        </div>
        <div></div>
        <Vector />
        <TextComponent
          label="Waseem"
          CustomTag="span"
          styleProps={{
            MarginLeft: "500px",
            fontSize: "20px",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Nunito",
            paddingTop: "25px",
            paddingLeft: "",
          }}
        />
      </div>
    </>
  );
};
//landing............................................................................
export const Landingpage = () => {
  return (
    <div>
      <Person />
      <TextComponent
        label="There are no schedules get started by creating schedules"
        styleProps={{
          fontFamily: "Nunito",
          fontStyle: "normal",
          paddingLeft: "500px",
          letterSpacing: "0.03em",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "130%",
        }}
      />

      <button
        style={{
          background: "#5375E2",
          borderRadius: "5px",
          height: "39.96094512939453px",
          width: "192px",
          margin: " 30px 624px 245.04px 624px",
          top: "615px",
          borderColor: "white",
          marginBottom: "40px",
        }}
      >
        <TextComponent
          label="+ Create New"
          styleProps={{
            fontFamily: "Nunito",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "27px",
            color: "#FFFFFF",
          }}
        />
      </button>
    </div>
  );
};

//PAGETWO...............................................................................
export const Backbutton = () => {
  return (
    <div style={{ marginLeft: "35px ", marginTop: "50px" }}>
      <img src="https://i.ibb.co/HnM1WDs/Vectorarrow.png" />
      <TextComponent
        label="Create new schedule"
        styleProps={{
          padding: "10px",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "33px",
          marginTop: "-44px",
          marginLeft: "43px",
        }}
      />
      <Font />
    </div>
  );
};
//Branch..............................
export const Branch = () => {
  // formdata.branchanddep.map((e)=>{console.log(e.branch)});
  
  return (
    <div>
      <Font />
      <TextComponent
        label="Branch"
        styleProps={{
          fontWeight: "700",
          fontSize: "16px",
          padding: "38.26px 0px 12px 51px",
        }}
      />
      <select
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "51px",
          width: "300px",
          borderRadius: "5px",
          color: "#A5A3A9",
          borderColor: "#A5A3A9",
          height: "56px",
        }}
      >
       {/* {formdata.branchanddep.map((e) => (<option value="">{e.branch}</option>))
       }
       */}
       
        
        {/* <option value="">BE</option>
        <option value="">B.TECH</option> */}
      </select>
    </div>
  );
};

//Department.......................................
export const Department = () => {

formdata.branchanddep.map((e)=>{e.deps.map((ele)=>{console.log(ele)})})
  return (
    <div>
      <Font />
      <TextComponent
        label="Department"
        styleProps={{
          display: "flex",
          flexDirection: "row",
          fontWeight: "700",
          fontSize: "16px",
          padding: "41px 278px 7px 105px",
        }}
      />
      <select
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "104px",
          width: "300px",
          borderRadius: "5px",

          color: "#A5A3A9",
          borderColor: "#A5A3A9",
          height: "56px",
        }}
      >
        {formdata.branchanddep.map((e)=>(e.deps.map((ele)=>(<option value="">{ele}</option>))))}
       
      </select>
    </div>
  );
};

//Exam Type............................................................
export const Examtype = () => {
  return (
    <div>
      <Font />
      <TextComponent
        label="ExamType"
        styleProps={{
          fontWeight: "700",
          fontSize: "16px",
          padding: "15px 113px 8px 48px",
        }}
      />
      <select
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "50px",
          width: "300px",
          borderRadius: "5px",
          width: "1090px",
          color: "#A5A3A9",
          borderColor: "#A5A3A9",
          height: "56px",
        }}
      >
        <option value="">Internal</option>
        <option value="">Model</option>
        <option value="">Semester</option>
      </select>
    </div>
  );
};
//Sem.....................................................................................
export const Semester = () => {
  const [semester, setSemester] = useState("");
  React.useEffect(()=>{
    console.log({semester})
  })

  return (
    <div>
      <Font />
      <InputComponent
        type="text"
        onchange={(a) => {
              setSemester(a.target.value);
            }}
        label={
          <TextComponent
            label="Semester"
            value={semester}
            styleProps={{
              display: "flex",
              flexDirection: "row",
              fontWeight: "700",
              fontSize: "16px",
              padding: "19px 117px 6px 2px",
            }}
            
          />
        }
        placeholder="3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          //marginLeft:"104px",
          width: "300px",
          height: "51px",
          color: "#A5A3A9",
          padding: "22px 114px -3px 2px",
        }}
      />
    </div>
  );
};

//subjects......................................................................
export const Subjects = () => {
  const [Subjects, setSubjects] = useState("");
  React.useEffect(()=>{
  console.log ({Subjects})
  })
  return (
    <div>
      <Font />
      <InputComponent
      onchange={(a) => {
              setSubjects(a.target.value);
            }}
        type="text"
        label={
          <TextComponent
            label="Subjects"
            value={(Subjects)}
            styleProps={{
              display: "flex",
              flexDirection: "row",
              fontWeight: "700",
              fontSize: "16px",
              padding: "19px 117px 6px 3px",
            }}
          />
        }
        placeholder="5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          //marginLeft:"104px",
          width: "300px",

          height: "51px",
          color: "#A5A3A9",
          padding: "22px 114px -3px 2px",
        }}
      />
    </div>
  );
};
//Labs.......................................................................................
export const Labs = () => {
  const [Labs, setLabs] = useState("");
  React.useEffect(()=>{
  console.log ({Labs})
  })
  return (
    <div>
      <Font />
      <InputComponent
      onchange={(a) => {
              setLabs(a.target.value);
            }}
        type="text"
        label={
          <TextComponent
            label="Labs"
            styleProps={{
              display: "flex",
              flexDirection: "row",
              fontWeight: "700",
              fontSize: "16px",
              padding: "19px 117px 6px 3px",
            }}
          />
        }
        placeholder="2"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",

          height: "51px",
          color: "#A5A3A9",
          padding: "22px 114px -3px 2px",
        }}
      />
    </div>
  );
};
