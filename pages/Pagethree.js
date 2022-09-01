import {
    Footer,
    Backbutton,
    TextComponent,
    InputComponent,
    Examtype,
    Subjects,
    Labs
  } from "../src/components";
  
  import React from "react";
  
  import { Header, Box, Branch, Department, Semester } from "../src/components";
  import GlobalStyle from "../src/Globalstyles";
  import {Sub} from "../src/subjectsndlab";
  import { Time,CheckBox } from "../src/time";
  import {Cards} from "../src/cards";
  
  const Pagethree = () => {
    return (
      <div>
        <GlobalStyle/>
        <Header/>
<Cards/>
<Footer/>
 </div>
        );
        }
export default Pagethree;