import React from "react";
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
import { Header, Box, Branch, Department, Semester } from "../src/components";

export const Cards=() => {
    return(
        <div>
<div style={{
  paddingTop: "150px",
  alignItems: "right",
  display: "flex",
  flexDirection: "row-reverse",
  paddingRight: "50px",
}}>
<TextComponent label="Filter" CustomTag="span" />
<input type="checkbox" id="showall" label="show all" />
<TextComponent label="Show Allocated" CustomTag="span" />
</div>
<div
style={{
  paddingTop: "20px",
  paddingLeft: "30px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
}}>
<span bools="true" />
<span header="BE IT SEM 3" bools="true">

</span>
<span header="BE EEE SEM 3" blue="true"/>
</div>
<div style={{
  paddingTop: "50px",
  paddingLeft: "30px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingBottom: "30px",
}}>
<TextComponent
label="BE CIVIL SEM 3" blue="true" />
<span header="BE CSE SEM 3" boole="true" />
<span header="BE CSBS SEM 3" blue="true" />
</div>
</div>
    )
};
