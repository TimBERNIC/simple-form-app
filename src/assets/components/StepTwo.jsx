const StepTwo = ({
  inputName,
  email,
  password,
  setFormClassName,
  s2ClassName,
  setS2ClassName,
}) => {
  return (
    <div className={s2ClassName}>
      <h2>Results</h2>
      <div className="step-two-text">
        <div>
          <p>Name : {inputName}</p>
          <p>Email : {email}</p>
          <p>Password: {password}</p>
        </div>
      </div>
      <button
        onClick={() => {
          setS2ClassName("display-box");
          setFormClassName("form-box");
        }}
        className="submit-button">
        Edit your informations
      </button>
    </div>
  );
};

export default StepTwo;
