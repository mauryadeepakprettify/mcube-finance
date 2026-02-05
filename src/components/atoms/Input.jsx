const Input = ({
  label,
  type = "text",
  name,
  id,
  onChange,
  value,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="relative w-full">
      <input
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className={`peer border-lambda/50 focus:border-primary w-full border-b bg-transparent pt-5 pb-2 text-black/70 transition-all duration-500 ease-in-out outline-none ${type === "number" ? "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" : ""}`}
        placeholder={placeholder}
        required={required}
      />
      <label
        htmlFor={id}
        className="text-lambda pointer-events-none absolute top-0 left-0 text-sm font-medium transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
