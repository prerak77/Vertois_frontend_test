import { Grid, TextField } from "@mui/material";
import { SingupBox, MainText, Submit } from "../Styles/LoginPage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ userInputs, onFormChange, onFormSubmit, redirect }) => {
  const [input, setInput] = useState({
    Email: "",
    Password: "",
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
    onFormSubmit();
    navigate("/main");
    if (redirect === "True") {
      setCorrect(true);
      navigate("/main");
    } else if (redirect === "False") {
      setCorrect(false);
      navigate("/login");
    }
  };
  return (
    <SingupBox>
      <MainText variant="h5" align="center">
        {"Login "}
      </MainText>
      <form>
        <Grid container spacing={1}>
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
              label={correct ? "Password" : "Wrong Password"}
              name="Password"
              defaultValue={userInputs}
              variant="outlined"
              type="password"
              fullWidth
              onChange={onInputChange}
              error={correct ? false : true}
            />
          </Grid>
        </Grid>
        <Submit
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/");
          }}
        >
          Sign Up
        </Submit>
        <Submit variant="contained" color="success" onClick={handleSubmit}>
          login
        </Submit>
      </form>
    </SingupBox>
  );
};

export default LoginPage;
