import { Grid, TextField } from "@mui/material";
import { SingupBox, MainText, Submit } from "../Styles/PrintPage";
import { useState } from "react";

const PrintPage = ({ userInputs, onFormChange, onFormSubmit, redirect }) => {
  const [input, setInput] = useState({
    CIN: "",
  });

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
  };
  return (
    <SingupBox>
      <MainText variant="h5" align="center">
        {"Print "}
      </MainText>
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic-email"
              label="CIN"
              name="CIN"
              defaultValue={userInputs}
              variant="outlined"
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
        </Grid>

        <Submit variant="contained" color="success" onClick={handleSubmit}>
          Print
        </Submit>
      </form>
    </SingupBox>
  );
};

export default PrintPage;
