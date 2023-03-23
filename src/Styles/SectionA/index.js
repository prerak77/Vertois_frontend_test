import { Container, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SubTitle = styled(Typography)(() => ({
  background: "#D9D9D9",
  height: "30px",
  width: "438px",
  fontSize: "24px",
  position: "relative",
  left: "240px",
}));

export const InputTitle = styled(Typography)(() => ({
  background: "#D9D9D9",
  height: "30px",
  width: "290px",
  position: "relative",
  left: "240px",
  top: "10px",
  alignContent: "center",
}));

export const InputContainerMain = styled(Container)(() => ({
  position: "relative",
  height: "700px",
  left: "-200px",
  top: "10px",
  background: "#eeeeee",
}));

export const InputNumber = styled(Typography)(() => ({
  background: "#BDBDBD",
  height: "30px",
  width: "45px",
  textAlign: "center",
  fontWeight: "bolder",
  display: "inline-block",
  marginRight: "10px",
}));

export const Inputs = styled(TextField)(() => ({
  position: "relative",
  left: "238px",
  top: "20px",
  height: "30px",
  width: "250px",
}));

export const SubmitButton = styled(Button)(() => ({
  position: "fit-container",
  left: "1030px",
  top: "-30px",
  marginBottom: "20px",
  marginRight: "10px",
}));
