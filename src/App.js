import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import axios from "axios";
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
    fetch("https://vercel-python-prerak77.vercel.app/data", {
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
    fetch("https://vercel-python-prerak77.vercel.app/signup", {
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
    let abc = await axios.post(
      "https://vercel-python-prerak77.vercel.app/login_add",
      Login_info
    );
    if (true) {
      axios
        .get("https://vercel-python-prerak77.vercel.app/login_send")
        .then((data) => setState(data.data.state_type[0]));
      console.log(state);
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
