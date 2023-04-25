//This is the page that is used to style and design the components present in the HomePage.js

//styled is imported from the material UI library specificly the styles folder
//to style specific components

//Container, Typography, TextField, Button are imported material UI to be custumized

import { Container, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

//This is the Typography component that is used to style the text 'SECTION - A: GENERAL DISCLOSURES'
export const SubTitle = styled(Typography)(() => ({
  background: "#D9D9D9",
  height: "30px",
  width: "438px",
  fontSize: "24px",
  position: "relative",
  // left: "240px",
}));

//This Typography component is  used to style the title that is going to be above each input feild
//indicating what input feilds it is
export const InputTitle = styled(Typography)(() => ({
  background: "#D9D9D9",
  height: "30px",
  width: "450px",
  position: "relative",
  // left: "240px",
  top: "10px",
  alignContent: "center",
}));

//This is a container component that is styled to store all the input feilds and align them so that
//all the input feilds are properly alignd
export const InputContainerMain = styled(Container)(() => ({
  position: "relative",
  top: "40px",
  height: "1020px",
  // left: "-200px",
  background: "#eeeeee",
}));

//This Typography component is styled to display the number of the input feild
export const InputNumber = styled(Typography)(() => ({
  background: "#BDBDBD",
  height: "30px",
  width: "45px",
  textAlign: "center",
  fontWeight: "bolder",
  display: "inline-block",
  marginRight: "10px",
}));

//This is a textField component that is styled for the user to enter the BRSR data
export const Inputs = styled(TextField)(() => ({
  position: "relative",
  // left: "238px",
  top: "20px",
  height: "30px",
  width: "450px",
}));

//This Button component is customized to create the submit button to go to the print page
export const SubmitButton = styled(Button)(() => ({
  position: "fit-container",
  left: "800px",
  top: "10px",
  width: "135px",
  marginBottom: "20px",
  marginRight: "10px",
}));
