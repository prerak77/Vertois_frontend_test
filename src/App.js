import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState, useEffect } from "react";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const [Inputs, setInputs] = useState();
  const [Signup_info, setSignup_info] = useState();
  const [Login_info, setLogin_info] = useState();
  const [state, setState] = useState();

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
    fetch("/data", {
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
    fetch("https://vercel-python-app-liart.vercel.app/signup", {
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
    const abc = await fetch(
      "https://vercel-python-app-liart.vercel.app/login_add",
      {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
          content: Login_info,
        }),
        headers: {
          "Content-type": "application/json; charset = UTF-8",
        },
      }
    );
    console.log(abc);
    if (!abc.ok) {
      fetch("https://vercel-python-app-liart.vercel.app/login_send", {
        mode: "no-cors",
      })
        .then((res) => {
          if (!res.ok) {
            return res.json();
          }
        })
        .then((data) => console.log(data));
      // console.log(state);
    }
  }

  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
