import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";

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

export const MainText = styled(Typography)(() => ({
  paddingBottom: "20px",
}));

export const Submit = styled(Button)(() => ({
  marginTop: "20px",
  marginRight: "15px",
  width: "45%",
}));
