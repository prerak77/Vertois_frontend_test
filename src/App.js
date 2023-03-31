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
import PrintPage from "./Pages/PrintPage";

const App = () => {
  const [Inputs, setInputs] = useState();
  const [Signup_info, setSignup_info] = useState();
  const [Login_info, setLogin_info] = useState();
  const [Print_info, setPrint_info] = useState();
  const [state, setState] = useState();
  const [pdf, setPdf] = useState();

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

  const handle_Print_info_Form_Change = (inputValues) => {
    setPrint_info(inputValues);
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
    let abc = await axios
      .post("https://vercel-python-prerak77.vercel.app/login_add", Login_info)
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

  const handle_Print_info_Submit_Form = async () => {
    const response = await fetch(
      "https://vercel-python-prerak77.vercel.app/pdf",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: Print_info,
        }),
      }
    );

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "file.pdf";
    a.click();
  };

  const download_pdf = () => {
    fetch("https://vercel-python-prerak77.vercel.app/downloade", {
      mode: "no-cors",
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "BRSR.pdf");
        document.body.appendChild(link);
        link.click();
      });
  };

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
        <Route
          path="/print"
          element={
            <PrintPage
              userInputs={Print_info}
              onFormChange={handle_Print_info_Form_Change}
              onFormSubmit={handle_Print_info_Submit_Form}
            />
          }
        />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
