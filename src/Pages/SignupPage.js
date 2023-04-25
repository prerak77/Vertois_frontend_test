//This is the Signup page that creates the user account and sends the user information to the
//backend

//Grid and TextField is imported from the material UI library to make a grid system
//and to add input feilds

//SignupBox,MainText, Submit are styled components imported from the the LoginPage in the
//Styles folder

//useState is imported from the react library to impliment state variables

//useNavigate is imported from the react-router-dom library to allow easy access to the redirect
//the user to differnt pages

import { Grid, TextField } from "@mui/material";
import { SingupBox, MainText, Submit } from "../Styles/SignupPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//1 state variables (userInputs) and 2 functions (onFormChange,onFormSubmit)
//have been imported from App.js.
const SignupPage = ({ userInputs, onFormChange, onFormSubmit }) => {
  //For local storage of the input data we intialize 'input' state variable and
  //it is export it to the backend
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Password: "",
    VerifyPassword: "",
  });
  //This Variabel to used to keep track if the user that is trying to create an account
  // has a matching password and confirm password or not and oscilates between True state and False State
  const [correct, setCorrect] = useState(true);

  //initialized navigate to easily redirect and navigate form one page to another
  const navigate = useNavigate();

  //This is a function updates the state variable 'input' to the input data entered by the user and
  // enters it into the array in 'input'.

  //After the login info is added to the 'input' variable and then the function onFormChange() is
  //called and then the updated data is sent to App.js
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    onFormChange((values) => ({ ...values, [name]: value }));
  };

  // This funtion is called when the submit button is pressed and then calls preventDefault() that
  // stops the page from refreshing and then calls the function onFormSubmit() that sends data to the
  // Backend and also checks if the password adn verifyPasswords are matching and update the value
  //of the state varible correct accordingly and also navigate the user to the appropirate page
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.Password === input.VerifyPassword) {
      setCorrect(true);
      onFormSubmit();
      navigate("/login");
    } else if (input.Password !== input.VerifyPassword) {
      setCorrect(false);
      navigate("/signup");
    }
  };
  return (
    //The SingupBox is a styled container that places each element properly
    <SingupBox>
      {/* Main text is a styled typography imported fromt the signUp.js page */}
      <MainText variant="h5" align="center">
        {"Sign up "}
      </MainText>
      {/*  form is set to store all the input data */}
      <form>
        {/* A grid is initialized with just 1 coloumn */}
        <Grid container spacing={1}>
          {/* A Grid element to indicate the first row */}
          <Grid item xs={12}>
            {/* This is a styled typography with 7 parameters label and name are used to indicate the 
                feild name, defaultValue is userInput to store the input values, onchange is a 
                function that calls the onInputChange() function to update the 'input' 
                state variable  */}
            <TextField
              id="outlined-basic-name"
              label="Name"
              name="Name"
              defaultValue={userInputs}
              variant="outlined"
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            {/* This input feild is similar the input feild above */}
            <TextField
              id="outlined-basic-email"
              label="Email"
              name="Email"
              defaultValue={userInputs}
              variant="outlined"
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            {/* This input feild is similar the input feild above */}
            <TextField
              id="outlined-basic-password"
              label="Password"
              name="Password"
              defaultValue={userInputs}
              variant="outlined"
              type="password"
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            {/* The is also a styled typography where in the label changes to Password dose not match 
                if the verified password entered does not match with password entered above 
                and it checks this by checking the value of  correct, if it True then it shows password
                and if the False then it shows "Password dose not match", similar process  occurs for error 
                parameter which turn red to indicate an error*/}
            <TextField
              id="outlined-basic-vpassword"
              label={correct ? "Verify Password" : "Password dose not match"}
              name="VerifyPassword"
              defaultValue={userInputs}
              variant="outlined"
              type="password"
              fullWidth
              onChange={onInputChange}
              error={correct ? false : true}
            />
          </Grid>

          {/* This is a submit button that calls the handleSubmit function */}
        </Grid>
        <Submit variant="contained" color="success" onClick={handleSubmit}>
          Sign Up
        </Submit>
        {/* This is a submit button that redirects the user to the login page */}
        <Submit
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </Submit>
      </form>
    </SingupBox>
  );
};

export default SignupPage;
