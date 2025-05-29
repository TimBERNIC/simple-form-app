import { FaEye } from "react-icons/fa";

const InputBloc = ({
  title,
  isVisible,
  setIsVisible,
  type,
  setType,
  value,
  setValue,
  inputClassName,
}) => {
  return (
    <div className="input-bloc">
      <p>{title}</p>
      <div className={inputClassName}>
        <input
          type={type}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            !isVisible && setIsVisible(true);
            isVisible ? setType("text") : setType("password");
          }}>
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default InputBloc;
