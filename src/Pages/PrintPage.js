//This is th print page where the user can downloade thier pdf of the BRSR reports stored in thier
//account

//Grid is imported from the material UI library to impliment a grid system

//PrintBox, MainText, Submit, PrintElement are styled components that are imported from the
//PrintPage.js from the styles folder

//useState, useEffect is imported from the react library to impliement state variables and to
//allow side effects to occur to the rendered components

//Navigate is imported from the react-router-dom library to allow easy access to the redirect
//the user to differnt pages

//PictureAsPdfIcon is imported from the icons folder from the material ui library to add pdf icon
import { Grid } from "@mui/material";
import { PrintBox, MainText, Submit, PrintElement } from "../Styles/PrintPage";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

//4 state variables (userInputs,redirect,Authenticated,User) and 2 functions (onFormChange,onFormSubmit)
//have been imported from App.js.
const PrintPage = ({
  userInputs,
  onFormChange,
  onFormSubmit,
  redirect,
  Authenticated,
  User,
}) => {
  //For local storage of the input data we intialize 'input' state variable and
  //it is export it to the backend to store the CIN number of the user
  const [input, setInput] = useState({
    CIN: "",
  });
  const [data, setData] = useState([]);

  //this useEffect hook is used to get the user's BRSR data that is stored in thier profile and only
  //loads once once the page is loaded and once the data is recieved from the backend the data is
  //stored in the state variabel 'data' to display later
  useEffect(() => {
    const response = fetch("https://vercel-python-ochre.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: User,
      }),
    })
      .then((response) => response.json())
      .then((data) => setData(data.current_user))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //This function is not used since there are no input feilds
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
  // Backend and then calls the onformchange() function to update CIN number and then call the
  // onFormSubmit()
  const handleSubmit = (event) => {
    const { name } = event.target;
    console.log(name);
    onFormChange((values) => ({ ...values, ["CIN"]: name }));

    event.preventDefault();
    onFormSubmit();
  };
  //This is prevents access to this page is the user is not logged in, If the user logs in using a
  //valid account then the State Variable Authenticated si set to True and hence is not redirected
  //to login page and loads the pdf page
  if (Authenticated !== "True") {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <PrintBox>
        <MainText variant="h5" align="center">
          {"Print "}
        </MainText>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {/* This div loops through the json data that is recieved from the backend and 
                  displays it on in the div */}
              <div>
                {data.map((item) => (
                  // This is an input feild that is styled in the PrintPage from the styles folder
                  //  where item is the data and item.name is the name of the company
                  <PrintElement key={item.id}>
                    <div
                      style={{
                        display: "inline-block",
                        width: "500px",
                      }}
                    >
                      {item.id}. {item.name}
                    </div>
                    {/*  this the submit button that can be used to downlode the pdf of the BRSR report */}
                    <Submit
                      variant="contained"
                      color="success"
                      name={item.cin}
                      onClick={handleSubmit}
                    >
                      {/* A PDF icon */}
                      <PictureAsPdfIcon />
                      PDF
                    </Submit>
                  </PrintElement>
                ))}
              </div>
            </Grid>
          </Grid>
        </form>
      </PrintBox>
    );
  }
};

export default PrintPage;
