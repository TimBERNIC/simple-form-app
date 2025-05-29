import { FaEye } from "react-icons/fa";

const InputBloc = ({
  title,
  value,
  setValue,
  inputClassName,
  type,
  onEyeClick,
  isVisible,
}) => {
  console.log(inputClassName);

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
        <button type="button" onClick={onEyeClick} className={isVisible}>
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default InputBloc;
