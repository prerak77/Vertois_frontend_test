//This is the page that is used to style and design the components present in the PrintPage.js

//styled is imported from the material UI library specificly the styles folder
//to style specific components

//Button, Container, Typography are imported material UI to be custumized

import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";

//The container component is customized to be used in the print page as the main box that has
//the title and the company names with the download button to download the pdf
//This component is styled similarly to css,
export const PrintBox = styled(Container)(() => ({
  position: "fixed",
  top: "150px",
  height: "300px",
  width: "700px",
  left: "25%",
  background: "#D9D9D9",
  padding: "20px",
  borderRadius: "20px",
}));

//This is the container for the individual company names along with the download button and is used
//to aling every component and space all the company names in a proper order
export const IndividualContainer = styled(Container)(() => ({
  position: "fixed",
  height: "30px",
  width: "700px",
  left: "25%",
  background: "blue",
  padding: "20px",
  borderRadius: "20px",
}));

//This is the Typography component that is used to style the text 'Downloade Page'
export const MainText = styled(Typography)(() => ({
  paddingBottom: "40px",
  paddingTop: "20px",
}));

//This is the Typography component that is used to style the text of the company name
export const CompanyName = styled(Typography)(() => ({
  paddingBottom: "40px",
  paddingTop: "20px",
}));

//This is the button component that allows the user to downloade the pdf and is styled to add the
//pdf icon as well
export const Submit = styled(Button)(() => ({
  marginRight: "5px",
  width: "5%",
  position: "relative",
  //   fontFamily: "bolder",
}));

//This the container component that seperates the 2 company names and align names properly
export const PrintElement = styled(Container)(() => ({
  paddingBottom: "10px",
}));
