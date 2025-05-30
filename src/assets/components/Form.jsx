import InputBloc from "../components/InputBloc";

const Form = (props) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (props.password === props.confirmPassword) {
            props.setS2ClassName("step-two-box");
            props.setIsFormValable(true);
            props.setErrorMessage("");
            props.setInputClassName("input-bloc");
          } else {
            props.setInputClassName("red");
            props.setErrorMessage(
              "Veuillez rentrer deux mots de passe similaires"
            );
          }
        }}>
        <InputBloc
          placeholder="Jean-Michel"
          title="Name"
          type="text"
          value={props.inputName}
          setValue={props.setInputName}
          isVisible="eye-invisible"
        />
        <InputBloc
          placeholder="jean-michel@youhou.fr"
          title="Email"
          type="email"
          value={props.email}
          setValue={props.setEmail}
          isVisible="eye-invisible"
        />
        <InputBloc
          title="Password"
          placeholder="azerty1234"
          type={props.classType1}
          value={props.password}
          setValue={props.setPassword}
          inputClassName={props.inputClassName}
          isVisible="eye-visible"
          onEyeClick={() => {
            props.classType1 === "password"
              ? props.setClassType1("text")
              : props.setClassType1("password");
            x;
          }}
        />
        <InputBloc
          title="Confirm your password"
          type={props.classType}
          placeholder="azerty1234"
          value={props.confirmPassword}
          setValue={props.setConfirmPassword}
          inputClassName={props.inputClassName}
          onEyeClick={() => {
            props.classType === "password"
              ? props.setClassType("text")
              : props.setClassType("password");
          }}
          isVisible="eye-visible"
        />
        <div className="error-bloc">{props.errorMessage}</div>
        <button className="submit-button">Register</button>
      </form>
    </>
  );
};

export default Form;
