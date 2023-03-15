import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const [Inputs, setInputs] = useState();
  const [Signup_info, setSignup_info] = useState();
  const [Login_info, setLogin_info] = useState();
  const [state, setState] = useState();

  const navigate = useNavigate();

  const handleFormChange = (inputValues) => {
    setInputs(inputValues);
  };

  const handle_Signup_info_Form_Change = (inputValues) => {
    setSignup_info(inputValues);
  };

  const handle_Login_info_Form_Change = (inputValues) => {
    setLogin_info(inputValues);
  };

  const handleSubmitForm = () => {
    fetch("https://vercel-python-iota-rust.vercel.app/data", {
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

  const handle_Signup_info_Submit_Form = () => {
    fetch("https://vercel-python-iota-rust.vercel.app/signup", {
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

  async function handle_Login_info_Submit_Form() {
    let abc = await axios
      .post("https://vercel-python-iota-rust.vercel.app/login_add", Login_info)
      .then((data) => {
        if (data.data.state_type[0] === "True") {
          navigate("/main");
        } else if (data.data.state_type[0] === "False") {
          setState(data.data.state_type[0]);
          navigate("/login");
        }
      });
    // console.log(state);
  }

  return (
    <div className="App">
      <Routes>
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

        <Route
          path="/main"
          element={
            <HomePage
              userInputs={Inputs}
              onFormChange={handleFormChange}
              onFormSubmit={handleSubmitForm}
            />
          }
        />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
