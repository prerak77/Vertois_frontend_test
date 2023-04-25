//This is the page that is used to style and design the components present in the MainPage

//styled is imported from the material UI library specificly the styles folder
//to style specific components

//Typography are imported material UI to be custumized
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//The Typography components is customized to be used as a title tag to display 'BRSR Report' text
export const MainTitle = styled(Typography)(() => ({
  paddingTop: "150px",
  paddingBottom: "20px",
}));

//The Typography components is customized to be used as a title tag to display 'Section - a' text
export const NavTitle = styled(Typography)(() => ({
  position: "relative",
  right: "100px",
}));
