import { Container, Typography, Button, Grid, Box } from "@mui/material";
import {
  SubTitle,
  InputContainerMain,
  SubmitButton,
  Inputs,
} from "../Styles/SectionA";
import { InputFeilds } from "../Components/InputFeilds";
import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { InputTitle, InputNumber } from "../Styles/SectionA";
import YearPicker from "react-year-picker";

const HomePage = ({ userInputs, onFormChange, onFormSubmit }) => {
  const [data, setData] = useState({});
  const [mobileNumber, setMobileNumber] = useState("");

  const navigate = useNavigate();

  const handleMobileNumberChange = (value, country) => {
    setMobileNumber(value);
  };

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onFormChange((values) => ({
      ...values,
      [name]: value,
      telephone: mobileNumber,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <Container maxWidth="bg" className="Home">
      <div id="container">
        <form>
          <InputContainerMain maxWidth="bg">
            <SubTitle>SECTION - A: GENERAL DISCLOSURES</SubTitle>

            <Grid
              container
              rowSpacing={10}
              columnSpacing={{ xs: 1, sm: 1, md: 4 }}
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

              {/* <InputFeilds
                num={3}
                details={"Year of incorporation"}
                label={"Year"}
                name={"Year"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds> */}
              <Grid item xs={4}>
                <InputTitle>
                  <InputNumber>{3}</InputNumber> {"Year of incorporation"}
                </InputTitle>
                <Inputs
                  // label={Details.label}
                  variant="outlined"
                  defaultValue={userInputs}
                  onChange={handelChange}
                  name={"Year"}
                  required
                  type="number"
                />
              </Grid>

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

              {/* <InputFeilds
                num={7}
                details={"Telephone"}
                label={"Telephone"}
                name={"Telephone"}
                value={userInputs}
                onChange={handelChange}
                // mask={masked}
              ></InputFeilds> */}

              <Grid item xs={4}>
                <InputTitle>
                  <InputNumber>{4}</InputNumber> {"Telephone"}
                </InputTitle>
                <PhoneInput
                  label={"Telephone"}
                  variant="outlined"
                  details={"Telephone"}
                  name={"Telephone"}
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  placeholder=" "
                  inputStyle={{
                    position: "relative",
                    left: "238px",
                    top: "20px",
                    height: "55px",
                    width: "250px",
                    backgroundColor: "none",
                    background: "#eeeeee",
                  }}
                />
              </Grid>

              <InputFeilds
                num={8}
                details={"Website"}
                label={"website"}
                name={"website"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>

              {/* <InputFeilds
                num={9}
                details={"Financial year"}
                label={"Financial year"}
                name={"Financial year"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds> */}

              <Grid item xs={4}>
                <InputTitle>
                  <InputNumber>{9}</InputNumber> {"Financial year"}
                </InputTitle>
                <Inputs
                  // label={Details.label}
                  variant="outlined"
                  defaultValue={userInputs}
                  onChange={handelChange}
                  name={"Financial year"}
                  required
                  type="number"
                />
              </Grid>

              <InputFeilds
                num={10}
                details={"Name of the Stock Exchange"}
                label={"Name of the Stock Exchange"}
                name={"Name of the Stock Exchange"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>
              <InputFeilds
                num={11}
                details={"Paid-up Capital:"}
                label={"Paid-up Capital:"}
                name={"Paid-up Capital:"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>
              <InputFeilds
                num={12}
                details={"Name and contact details"}
                label={"Name and contact details"}
                name={"Name and contact details"}
                value={userInputs}
                onChange={handelChange}
              ></InputFeilds>
              <InputFeilds
                num={13}
                details={"Reporting boundary"}
                label={"Reporting boundary"}
                name={"Reporting boundary"}
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
          <SubmitButton
            variant="contained"
            color="success"
            onClick={() => {
              navigate("/print");
            }}
          >
            Print
          </SubmitButton>
        </form>
      </div>
    </Container>
  );
};

export default HomePage;
