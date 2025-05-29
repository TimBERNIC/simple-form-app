import InputBloc from "../components/InputBloc";

const Form = ({
  classType1,
  setClassType1,
  classType,
  setClassType,
  inputName,
  setInputName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  formClassName,
  setFormClassName,
  setS2ClassName,
  errorMessage,
  setErrorMessage,
  inputClassName,
  setInputClassName,
}) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password === confirmPassword) {
            setS2ClassName("step-two-box");
            setFormClassName("display-box");
            setErrorMessage("");
            setInputClassName("input-bloc");
          } else {
            setInputClassName("red");
            setErrorMessage("Veuillez rentrer deux mots de passe similaires");
          }
        }}
        className={formClassName}>
        <InputBloc
          title="Name"
          type="text"
          value={inputName}
          setValue={setInputName}
          isVisible="eye-invisible"
        />
        <InputBloc
          title="Email"
          type="email"
          value={email}
          setValue={setEmail}
          isVisible="eye-invisible"
        />
        <InputBloc
          title="Password"
          type={classType1}
          value={password}
          setValue={setPassword}
          inputClassName={inputClassName}
          isVisible="eye-visible"
          onEyeClick={() => {
            classType1 === "password"
              ? setClassType1("text")
              : setClassType1("password");
            x;
          }}
        />
        <InputBloc
          title="Confirm your password"
          type={classType}
          value={confirmPassword}
          setValue={setConfirmPassword}
          inputClassName={inputClassName}
          onEyeClick={() => {
            classType === "password"
              ? setClassType("text")
              : setClassType("password");
          }}
          isVisible="eye-visible"
        />
        <div className="error-bloc">{errorMessage}</div>
        <button className="submit-button">Register</button>
      </form>
    </>
  );
};

export default Form;
