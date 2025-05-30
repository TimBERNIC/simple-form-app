import { FaEye } from "react-icons/fa";

const InputBloc = ({
  placeholder,
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
      <label htmlFor={title}>{title}</label>
      <div className={inputClassName}>
        <input
          placeholder={placeholder}
          id={title}
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
