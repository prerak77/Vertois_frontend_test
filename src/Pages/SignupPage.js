import { Grid, TextField } from "@mui/material";
import { SingupBox, MainText, Submit } from "../Styles/SignupPage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = ({ userInputs, onFormChange, onFormSubmit }) => {
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Password: "",
    VerifyPassword: "",
  });
  const [correct, setCorrect] = useState(true);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    onFormChange((values) => ({ ...values, [name]: value }));
  };

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
    <SingupBox>
      <MainText variant="h5" align="center">
        {"Sign up "}
      </MainText>
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
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
        </Grid>
        <Submit variant="contained" color="success" onClick={handleSubmit}>
          Sign Up
        </Submit>
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
