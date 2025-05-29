import InputBloc from "../components/InputBloc";

const Form = ({
  type,
  setType,
  isVisible,
  setIsVisible,
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
        />
        <InputBloc
          title="Email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <InputBloc
          title="Password"
          type={type}
          setType={setType}
          value={password}
          setValue={setPassword}
          inputClassName={inputClassName}
        />
        <InputBloc
          title="Confirm your password"
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          type={type}
          setType={setType}
          value={confirmPassword}
          setValue={setConfirmPassword}
          inputClassName={inputClassName}
        />
        <div className="error-bloc">{errorMessage}</div>
        <button className="submit-button">Register</button>
      </form>
    </>
  );
};

export default Form;
