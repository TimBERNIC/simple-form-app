import { useState } from "react";
import "./App.css";
import Form from "./assets/components/Form";
import StepTwo from "./assets/components/StepTwo";

const App = () => {
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formClassName, setFormClassName] = useState("");
  const [s2ClassName, setS2ClassName] = useState("display-box");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputClassName, setInputClassName] = useState("input-bloc");
  const [classType, setClassType] = useState("password");
  const [classType1, setClassType1] = useState("password");
  return (
    <>
      <header>
        <h2 className="container">Create account</h2>
      </header>
      <main>
        <div className="centralContainer">
          <Form
            inputName={inputName}
            setInputName={setInputName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            formClassName={formClassName}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setFormClassName={setFormClassName}
            setS2ClassName={setS2ClassName}
            inputClassName={inputClassName}
            setInputClassName={setInputClassName}
            classType={classType}
            setClassType={setClassType}
            classType1={classType1}
            setClassType1={setClassType1}
          />
          <StepTwo
            inputName={inputName}
            email={email}
            password={password}
            setFormClassName={setFormClassName}
            s2ClassName={s2ClassName}
            setS2ClassName={setS2ClassName}
          />
        </div>
      </main>
      <footer>
        <div className="container">
          This exercice was made with{" "}
          <span className="footer-caracters"> React </span> by
          <a href="https://github.com/TimBERNIC" className="footer-caracters">
            {" "}
            TimBERNIC{" "}
          </a>{" "}
          with
          <a href="https://www.lereacteur.io/" className="footer-caracters">
            {" "}
            LE REACTEUR{" "}
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
