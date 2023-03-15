import { Container, Typography, Button, Grid, Box, top } from "@mui/material";
import { MainTitle, NavTitle } from "../Styles/MainText";
import { SubTitle, InputContainerMain, SubmitButton } from "../Styles/SectionA";
import { InputFeilds } from "../Components/InputFeilds";
import { useState } from "react";
import * as React from "react";
import { IMaskInput } from "react-imask";
import IMask from "imask";

const HomePage = ({ userInputs, onFormChange, onFormSubmit }) => {
  const [data, setData] = useState({});

  const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    onFormChange((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  // var masked = IMask.PatternMasked({
  //   mask: "{#}000[aaa]/NIC-`*[**]",
  // });

  return (
    <div id="container">
      {/* This is the entery main page */}
      <Container maxWidth="bg" className="Home">
        <Container className="TopNav">
          <Grid container>
            <Grid item xs={6} md={6}>
              <Button href="/main" radius="50px">
                <img
                  width="100px"
                  hight="100px"
                  src="https://pbs.twimg.com/profile_images/885782805086584832/8G2QCORh_400x400.jpg"
                  alt=""
                />
              </Button>
            </Grid>
            <Grid item s={6} md={6}>
              <NavTitle className="Heading" variant="h4">
                BRSR Report
              </NavTitle>
            </Grid>
            <Grid item s={12} md={12} hight="150px">
              <Box top="150px"></Box>
            </Grid>
          </Grid>
        </Container>
        <MainTitle variant="h3" align="center">
          {"SECTION - A"}
        </MainTitle>
        <Typography variant="h3" align="center">
          {" GENERAL DISCLOSURES"}
        </Typography>
      </Container>
      {/* This is the from page */}
      <Container maxWidth="bg" className="Home">
        <form>
          <InputContainerMain maxWidth="bg">
            <SubTitle>Section - A</SubTitle>

            <Grid
              container
              rowSpacing={10}
              columnSpacing={{ xs: 1, sm: 1, md: 6 }}
            >
              <InputFeilds
                num={1}
                details={"Corporate Identity Number (CIN) of the Listed Entity"}
                label={"CIN"}
                name={"CIN"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              <InputFeilds
                num={2}
                details={"Name of the Listed Entity"}
                label={"Name"}
                name={"Name"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              <InputFeilds
                num={3}
                details={"Year of incorporation"}
                label={"Year"}
                name={"Year"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              <InputFeilds
                num={4}
                details={"Registered office address"}
                label={"office Address"}
                name={"office Address"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              <InputFeilds
                num={5}
                details={"Corporate address"}
                label={"Corporate Address"}
                name={"Corporate Address"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              <InputFeilds
                num={6}
                details={"E-mail"}
                label={"Email"}
                name={"Email"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              <InputFeilds
                num={7}
                details={"Telephone"}
                label={"Telephone"}
                name={"Telephone"}
                value={userInputs}
                onChange={handelChange}
                // mask={masked}
              ></InputFeilds>

              <InputFeilds
                num={8}
                details={"Website"}
                label={"website"}
                name={"website"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>
            </Grid>
          </InputContainerMain>
          <SubmitButton
            variant="contained"
            color="success"
            href="#container"
            onClick={handleSubmit}
          >
            Submit
          </SubmitButton>
        </form>
      </Container>
    </div>
  );
};

export default HomePage;
