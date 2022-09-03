import {
  Backbutton,
  Header,
  Box,
  Branch,
  Department,
  Semester,
} from "../src/components";
import {
  Footer,
  TextComponent,
  InputComponent,
  Examtype,
  Subjects,
  Labs,
} from "../src/components";

import React from "react";
import { DotBox, OrangeBox, BlueBox } from "../src/cardscomponent";

import { CheckButton } from "../src/subjectsndlab";

import GlobalStyle from "../src/Globalstyles";

import { Time, CheckBox } from "../src/time";

const Landingpage = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div
        style={{
          display: "flex",
          directon: "row",
          marginTop: "10px",
          marginBottom: "-35px",
          marginLeft: "78%",
          opacity: "0.8",
        }}
      >
        <TextComponent label="Show Allocated" />
        <CheckButton />
        <TextComponent label="Filter" styleProps={{ marginLeft: "10px" }} />
      </div>
      <div style={{ display: "flex", direction: "row" }}>
        <DotBox />
        <OrangeBox />
        <BlueBox />
      </div>
      <div style={{ display: "flex", direction: "row" }}>
        <div style={{ marginLeft: "75px" }}>
          <BlueBox />
        </div>
        <OrangeBox />
        <BlueBox />
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
