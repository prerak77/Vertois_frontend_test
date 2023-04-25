//This page is used to create a reuseable compoment that will be used to create the custom
//input feild along with input title and input number

//Grid is imported from the material UI library to add a grid system to the page and align all the
//elements

//InputTitle, InputNumber, Inputs are styled compoenets that are imported fromt the SectionA.js page
//from the styles folder

import { Grid } from "@mui/material";

import { InputTitle, InputNumber, Inputs } from "../Styles/SectionA";

//This is a custom component ment to be reused as the input feilds and contains the title of the
//the input feild along with the the number of the input feild and the styled input feild itself

//It imporst all the parameters from the main page as Details from which the individual data can be
//extracted
export const InputFeilds = (Details) => {
  return (
    //A grid is initialized which has 2 columnswhen the full screen state and 1 column when
    //in small screen or on mobile
    <Grid item xs={12} md={6}>
      {/* This is a container that contains the number of the input feild as well as the title of the
          input feild */}
      <InputTitle>
        <InputNumber>{Details.num}</InputNumber> {Details.details}
      </InputTitle>
      {/* This is the styled input feild  with 5 parameters stating the default value, what function 
          must be called when the user tries to enter data or onchange, the name which can be 
          used to id the input feild and also that this is a required feild*/}
      <Inputs
        // label={Details.label}
        variant="outlined"
        defaultValue={Details.value}
        onChange={Details.onChange}
        name={Details.name}
        required
      />
    </Grid>
  );
};
