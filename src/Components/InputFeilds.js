import { Grid } from "@mui/material";

import {
  InputTitle,
  InputNumber,
  Inputs,
  inputComponent,
} from "../Styles/SectionA";

export const InputFeilds = (Details) => {
  return (
    <Grid item xs={4}>
      <InputTitle>
        <InputNumber>{Details.num}</InputNumber> {Details.details}
      </InputTitle>
      <Inputs
        // label={Details.label}
        variant="outlined"
        defaultValue={Details.value}
        onChange={Details.onChange}
        name={Details.name}
        inputComponent={Details.mask}
        required
      />
    </Grid>
  );
};
