import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";

export const SingupBox = styled(Container)(() => ({
  position: "fixed",
  top: "150px",
  height: "300px",
  width: "400px",
  left: "35%",
  background: "#D9D9D9",
  padding: "20px",
  borderRadius: "20px",
}));

export const MainText = styled(Typography)(() => ({
  paddingBottom: "40px",
  paddingTop: "20px",
}));

export const Submit = styled(Button)(() => ({
  marginTop: "50px",
  marginLeft: "35px",
  width: "75%",
  //   fontFamily: "bolder",
}));
