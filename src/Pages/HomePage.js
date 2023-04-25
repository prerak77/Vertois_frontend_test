// The modules imported from the material ui library are container and Grids

// The specific styles that are imported in the Styles folder from the SectionA page are
// SubTitle which is the styled heading, InputContainerMain which is the styled container to store
// the all the components, SubmitButton which is the styled button to submit the form and Inputs
// which are all the styled input feilds

//The InputFeilds are custom desiged reuseable compnent that is imported from the Components folder
//and from the specific InputFeilds Page

//UseState is the React hook that can be used to allocates state function and change state without
//rendering

//Next we import the React Library to access all the function from React

//We also import UseNaviagate and navigate from react-router-dom to allows easy access to the
//navigating from one page to another

//the PhoneInput function is imported from the react-phone-input-2 to have a predefined input feild
//to vaildate and enter any international phone number as well as a bootstrap file to style and design
//the phone input feild

import { Container, Grid } from "@mui/material";
import {
  SubTitle,
  InputContainerMain,
  SubmitButton,
  Inputs,
} from "../Styles/SectionA";
import { InputFeilds } from "../Components/InputFeilds";
import { useState } from "react";
import * as React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { InputTitle, InputNumber } from "../Styles/SectionA";

//This is the main page that has all the components of the page to enter the BRSR data

//3 state variables (userInputs,Authenticated,User) and 2 functions (onFormChange,onFormSubmit)
//have been imported from App.js.
const HomePage = ({
  userInputs,
  onFormChange,
  onFormSubmit,
  Authenticated,
  User,
}) => {
  //For local storage of the input data we intialize 'data' state variable and since a different
  //library is used for mobile number hence we have to use a different state variable to store the
  //mobile number abd later add it to 'data' and export it to the backend
  const [data, setData] = useState({});
  const [mobileNumber, setMobileNumber] = useState("");

  //initialized navigate to easily redirect and navigate form one page to another
  const navigate = useNavigate();

  //This is a function to set the mobile number to the data entered in the input feild once the
  //function is called
  const handleMobileNumberChange = (value, country) => {
    setMobileNumber(value);
  };
  // this is a function updates the state variable 'data' to the input data entered by the user and
  // enters it into the array in 'data'.

  // Once all the BRSR data is added to the array 'data' then the onFormChange() is called all the
  // data including number and the username of the user adding the data is sent to App.js
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
      user: User,
    }));
  };

  // This funtion is called when the submit button is pressed and then calls preventDefault() that
  // stops the page from refreshing and then calls the function onFormSubmit() that sends data to the
  //  Backend
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  //This is prevents access to this page is the user is not logged in, If the user logs in using a
  //valid account then the State Variable Authenticated si set to True and hence is not redirected
  //to login page and loads the main page
  if (Authenticated !== "True") {
    return <Navigate replace to="/login" />;
  } else {
    return (
      // A container is initialized to properly sapce out the elements
      <Container maxWidth="bg" className="Home">
        <div id="container">
          {/* a form is set to store all the input data */}
          <form>
            {/* A styles Container customized in the Styles folder is initialize to impliment grids */}
            <InputContainerMain maxWidth="bg">
              {/* This is a styled H2 tag */}
              <SubTitle>SECTION - A: GENERAL DISCLOSURES</SubTitle>

              {/* A grid is initialized with 2 coloumns and 10px spacing between each colomns  */}
              <Grid
                container
                rowSpacing={10}
                columnSpacing={{ xs: 1, sm: 1, md: 6 }}
              >
                {/* input feilds that are customized to fit the page are designed in the Components
                    page and with 6 parameter that are used to indicate the number of the specific
                    feild, name of the feild,lable to act as a placeholder, name to help id in the 
                    handleChange() function and value that tells where the input data is stored */}
                <InputFeilds
                  num={1}
                  details={
                    "Corporate Identity Number (CIN) of the Listed Entity"
                  }
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

                {/* Since the year feild must be a number hence the styled input feild is not used
                    instead the input feilds is desiged here itself and an extra parameter 'typ' is 
                    added to restrict teh input to number only*/}
                <Grid item xs={12} md={6}>
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

                {/* this is similar to the 3dh input feild but instad of an extra feild PhoneInput 
                    feild is used to restrict the user input to vaild mobile number only. Instad of 
                    userInput to store data mobileNumber is used to store the number inputed and instead 
                    of 'handleChange', 'handleMobileNumberChange' is used to update the variable value and 
                    an extra inputStyle is added to style the input page*/}
                <Grid item xs={12} md={6}>
                  <InputTitle>
                    <InputNumber>{7}</InputNumber> {"Telephone"}
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
                      // left: "238px",
                      // top: "20px",
                      height: "55px",
                      width: "450px",
                      backgroundColor: "none",
                      background: "#eeeeee",
                      marginTop: "20px",
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

                <Grid item xs={12} md={6}>
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

            {/* This is the final submit button that calls the handleSubmit() function to submit all 
                the data to the bacekend */}
            <SubmitButton
              variant="contained"
              color="success"
              href="#container"
              onClick={handleSubmit}
            >
              Submit
            </SubmitButton>
            {/* This the print button that redirects the user to pdf page where they can downloade the PDF */}
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
  }
};

export default HomePage;
