// All the imports are stated in the section below. 4 pages includeing HomePage, SignupPage,
// LoginPage,PrintPage from the Pages folder.

// Then axios is imported to help with connectivity with backend API

// BrowserRouter,Routes,Navigate,useNavigate are imported from the react-router-dom to help with
// navigation between different pages

//UseSate is imported from the React library to use satate varibles

import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import PrintPage from "./Pages/PrintPage";

import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

// Primary function thats handels all the frontend function that manage all the backend
// API connectivity
const App = () => {
  // Below are all the varibels used in the App() function

  //Inpusts is the varibale used to store the BRSR report data which is retrived from the main page

  //Signup_info is the variable used to store all the user infromation that is retrieved from the
  //sign up page

  //Login_info is the variable used to store the login infromation that is retrieved
  //from the login up page

  //Print_info is the variable used store the data that can be printed in the print page

  //state is used keep track if the user that is loggin is valid or not

  //idk why is decalred pdf variable

  //the varibale authenticated is used to restrict access to the main and print page and only allow
  //access to those pages if this variable is set to True

  //the state variable user is used to keep track of which user is loged in and help keep track of
  //the print information related to the user

  //the navigate variable is used to to store the useNavigate() function and easily navigate from
  //one page to another

  const [Inputs, setInputs] = useState();
  const [Signup_info, setSignup_info] = useState();
  const [Login_info, setLogin_info] = useState();
  const [Print_info, setPrint_info] = useState();
  const [state, setState] = useState();
  const [pdf, setPdf] = useState();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  //The next 4 functions are to keep track of the input feilds in the the their respective pages,
  //this fuction updates the input varibale that are assgined and decribed above when the
  //user adds inputs in the form
  const handleFormChange = (inputValues) => {
    setInputs(inputValues);
  };

  const handle_Signup_info_Form_Change = (inputValues) => {
    setSignup_info(inputValues);
  };

  const handle_Login_info_Form_Change = (inputValues) => {
    setLogin_info(inputValues);
  };

  const handle_Print_info_Form_Change = (inputValues) => {
    setPrint_info(inputValues);
  };

  //This function is used send data to the backend python API and to the specific endpoint /data
  //the mode is 'no-cors'to prevent cors report and the HTTP method is POST since data is sent to
  //the backend. This send the BRSR report data to store in the database.
  const handleSubmitForm = () => {
    fetch("https://vercel-python-ochre.vercel.app/data", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({
        content: Inputs,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
  };

  //This function send data of the signup page user data to the signup endpoint in the backend
  //once the signup button is pressed
  const handle_Signup_info_Submit_Form = () => {
    fetch("https://vercel-python-ochre.vercel.app/signup", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({
        content: Signup_info,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
  };

  //This is an asynchronous fucntion that first sends the login used data from the the login page and
  //sends it to the backend endpoint login_add then checks if the user is vaild in the backend and then
  //the backend API sends if the user login information is valid and then this function retrieves
  //the data and checks if it is True or False and respectively uppdate the user and authenticated
  //variable and navigate to the specific page
  async function handle_Login_info_Submit_Form() {
    let abc = await axios
      .post("https://vercel-python-ochre.vercel.app/login_add", Login_info)
      .then((data) => {
        if (data.data.state_type[0] === "True") {
          setauthenticated("True");
          setUser(data.data.user[0]);
          navigate("/main");
        } else if (data.data.state_type[0] === "False") {
          setState(data.data.state_type[0]);
          // navigate("/login");
        }
      });
    // console.log(state);
  }

  //This is an asynchronous fucntion that first sends which is user is logged in and sedn it to
  //the backend and recieve all the company information related to the user that is logged in
  //then if the print button is pressed then it downloads the pdf with all the company details
  const handle_Print_info_Submit_Form = async () => {
    const response = await fetch("https://vercel-python-ochre.vercel.app/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: Print_info,
      }),
    });

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "BRSR.pdf";
    a.click();
  };

  // const download_pdf = () => {
  //   fetch("https://vercel-python-ochre.vercel.app/downloade", {
  //     mode: "no-cors",
  //     method: "GET",
  //   })
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(new Blob([blob]));
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "BRSR.pdf");
  //       document.body.appendChild(link);
  //       link.click();
  //     });
  // };

  //Below are all the Routes that can be accessed by the user throug various paths
  return (
    <div className="App">
      {/* All the route that can  be accesed by the user must be wrapped in the <Routes> tag that 
          act as a a parent tag for the browser to render  */}
      <Routes>
        {/* All the individual route must have a path that allows users to access the web page */}
        {/* In this specific Route the path is to render the signup page which has a unique path 
            /signup and the individual element that it renders is the SignupPage which is in the 
            Pages folder and this page has to be rendered with a userInput to store data from that 
            page, onFormChange which is a function that detects change in the input feilds and updates
            the variabes accordingly, onFormSubmit which is function that submits a post request to 
            the backend when called    */}
        <Route
          path="/signup"
          element={
            <SignupPage
              userInputs={Signup_info}
              onFormChange={handle_Signup_info_Form_Change}
              onFormSubmit={handle_Signup_info_Submit_Form}
            />
          }
        />
        {/* In this specific route the path of access is /login and with all the similar parameter 
            mentioned above and an additional parameter varaible called redirect that can be True 
            or false and depending on the state can redirect the user to the next page*/}
        <Route
          path="/login"
          element={
            <LoginPage
              userInputs={Login_info}
              onFormChange={handle_Login_info_Form_Change}
              onFormSubmit={handle_Login_info_Submit_Form}
              redirect={state}
            />
          }
        />

        {/* This is the route to tha main page where you can enter the BRSR report data and it has 
            similar parameters as the first route and includes 2 extra parameters, Authenticated is a
            variable that is ethier True or False and only allows access to this specific page if True, 
            User is a variable that lets the browser know which user is currently logged in   */}
        <Route
          path="/main"
          element={
            <HomePage
              userInputs={Inputs}
              onFormChange={handleFormChange}
              onFormSubmit={handleSubmitForm}
              Authenticated={authenticated}
              User={user}
            />
          }
        />
        {/* This Route has the path /print and takes you to the page that allows the user to access 
            thier documents and downloade them as PDFss */}
        <Route
          path="/print"
          element={
            <PrintPage
              userInputs={Print_info}
              onFormChange={handle_Print_info_Form_Change}
              onFormSubmit={handle_Print_info_Submit_Form}
              Authenticated={authenticated}
              User={user}
            />
          }
        />
        {/* This is a route that redirects the user to the login page if a url is entered that doee not
            match any of the above routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
