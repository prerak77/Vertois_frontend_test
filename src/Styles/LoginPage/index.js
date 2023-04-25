//This is the page that is used to style and design the components present in the LoginPage.js

//styled is imported from the material UI library specificly the styles folder
//to style specific components

//Button, Container, Typography are imported material UI to be custumized

import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";

//The container component is customized to be used in the login page as the main box that has
//the title, 2 input feilds and 2 buttons
//This component is styled similarly to css,
export const SingupBox = styled(Container)(() => ({
  position: "fixed",
  top: "100px",
  height: "400px",
  width: "400px",
  left: "35%",
  background: "#D9D9D9",
  padding: "20px",
  borderRadius: "20px",
}));

//The Typography components is customized to be used as a title tag to display 'Login Page' text
export const MainText = styled(Typography)(() => ({
  paddingBottom: "50px",
}));

//The Button components is customized to be used as a the button to navigate between the signup page
//and main page
export const Submit = styled(Button)(() => ({
  marginTop: "50px",
  marginRight: "15px",
  width: "45%",
}));
