import {Container, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SubTitle = styled(Typography)(() => ({
    background : '#D9D9D9',
    height : "30px",
    width : "118px",
    fontSize : "24px",
    position : "relative",
    left : "240px",

  }));

export const InputTitle = styled(Typography)(() => ({
  background : '#D9D9D9',
  height : "30px",
  width : "450px",
  position : "relative",
  left : "240px",
  top : "10px",
  alignContent : "center",
}));

export const InputContainerMain = styled(Container)(() =>({
  position : "relative",
  top : "40px",
  height : "600px",
  left : "-200px"
}));


export const InputNumber = styled(Typography)(() =>({
  background:"#BDBDBD",
  height: "30px",
  width : "45px",
  textAlign : "center",
  fontWeight : "bolder",
  display : "inline-block",
  marginRight : "10px",
}));

export const Inputs = styled(TextField)(() => ({
  position : "relative",
  left : "238px",
  top : "20px",
  height : "30px",
  width : "450px"
}))

export const SubmitButton = styled(Button)(() => ({
  position : "fit-container",
  left : "1030px",
  top : "10px",
  marginBottom : "20px"
}))