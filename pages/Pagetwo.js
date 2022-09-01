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

const Pagetwo = () => {
  
  return (
    
    <div>
      <GlobalStyle />
      <Header />
      <Backbutton />
      <Box
        style={{
          marginBottom: "126px",
          width: "1196px",
          height: "1400px",
          marginLeft: "122px",
          marginTop: "30px",
          marginRigh: "122px",
          background: "#FBFBFB",
          
        }}
      > 
      <div style={{display:"flex",
      flexDirection:"row"}} >
      <Branch/>
        <Department/>
        <Semester/>
        </div>
       
        <div>
        <Examtype/>
        </div>
        <div style={{padding:"26px 47px 0px 46px",
       fontWeight: '700',
fontsize: '20px'}}>
        Time Range
       </div>

       <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "21px",
            padding: "32px",
          }}
        >
       <div style={{padding: "13px 5px 0px 20px"}}>
         <TextComponent label="FN"/>
         </div>


          <Time/>
          <Time/>
          <Time/>
      
          <TextComponent
           
            label="to"
            styleProps={{ padding:"10px 10px 10px 10px"}}
          />
          <Time/>
          <Time/>
          <Time/>
         
          <div style={{display: "flex",
            flexDirection: "row",
            gap: "30px",
            marginLeft:"14.41px",
            color: "#767676",
            fontWeight: "400",
fontSize: "16px",
marginTop:"10px"
            }} >
            <TextComponent>
          3 Hours
            </TextComponent>
          <CheckBox/>
          <TextComponent>
          All set for FN
            </TextComponent>

         
          </div>
        </div>
       
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "21px",
            padding: "30px",
          }}
        >
        <div style={{padding:"14px 1px 0px 23px;"}}>
          <TextComponent label="AN"/>
          </div>
              <Time />
          <Time/>
          <Time/>
          <TextComponent
           label="to"
             styleProps={{ padding:"10px 10px 10px 10px"}}
          />
          <Time/>
          <Time/>
          <Time/>
          <div style={{display: "flex",
            flexDirection: "row",
            gap: "30px",
            marginLeft:"14.41px",
            color: "#767676",
            fontWeight: "400",
fontSize: "16px",
marginTop:"10px"
            }} >
            <TextComponent>
          3 Hours
            </TextComponent>
          <CheckBox/>
          <TextComponent>
          All set for AN
            </TextComponent>
          </div>
        </div>
      
       
       <div style={{display:"flex",
      flexDirection:"row",
      marginLeft: "28px",borderColour:"#A5A3A9",
      borderRadius:"5px"}}>
        <Subjects style={{padding: "20px 1px 5px 49p"}}/>
        <Labs/>
        </div>

       <div style={{padding:"24px 0px 8px 44px",
       fontWeight: "700",
fontSize: "16px"}}>
       <TextComponent 
       label="Subject1"/>
       <Sub/>
       </div>
       <div style={{padding:"24px 0px 8px 44px",
       fontWeight: "700",
fontSize: "16px"}}>
       <TextComponent 
       label="Subject2"/>
       <Sub/>
       </div>
       <div style={{padding:"24px 0px 8px 44px",
        fontWeight: "700",
fontSize: "16px"
       }}>
       <TextComponent 
       label="Subject3"/>
       <Sub/>
       </div>
       <div style={{padding:"24px 0px 8px 44px",
        fontWeight: "700",
fontSize: "16px"}}>
       <TextComponent 
       label="Subject4"/>
       <Sub/>
       </div>
       <div style={{padding:"24px 0px 8px 44px",
        fontWeight: "700",
fontSize: "16px"}}>
       <TextComponent 
       label="Subject5"/>
       <Sub/>
       </div>
       <div style={{padding:"14px 47px 0px 46px",
       fontWeight: '700',
fontsize: '20px'}}>
        Lab
       </div>
       <div style={{padding:"24px 0px 8px 44px", fontWeight: "700",
fontSize: "16px"}}>
       <TextComponent 
       label="Lab1"/>
       <Sub/>
       </div>
       <div style={{padding:"24px 0px 8px 44px", fontWeight: "700",
fontSize: "16px"}}>
       <TextComponent 
       label="Lab2"/>
       <Sub/>
       </div>
</Box>
      <button style={{background: "#5375E2",borderRadius: "5px",height: "39.96094512939453px",width: "192px",margin:"2px 61px 31.04px 1123px",top: "615px",borderColor:"white",marginBottom:"20px"
}}>
       <TextComponent label="save" 
    styleProps={{fontFamily: 'Nunito',fontStyle: "normal",fontWeight: "400",fontSize: "20px",lineHeight: "27px",color: "#FFFFFF"}}/>
      </button>
      <Footer/>
    </div>
  );
};
export default Pagetwo;
