import ReactDOM from "react-dom";
import React from "react";
import {Footer} from "./components";
import{TextComponent} from "./components";
import{Header,Landingpage} from "./components"
import { createGlobalStyle } from 'styled-components';
import GlobalStyle from "./Globalstyles";
export const App=()=>
{
    return(
      <>
      <GlobalStyle/>
       <Header/>
        <Landingpage/>
     <Footer/>
      
       </>
       
    )
    
}


