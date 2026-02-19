const Input = ({
  variant = "",
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
    <label className="relative w-full">
      <input
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className={`peer w-full border-b bg-transparent pt-5 pb-2 transition-all duration-500 ease-in-out outline-none ${type === "number" ? "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" : ""} ${variant === "light" ? "border-white/70 text-white/70 focus:border-white " : "border-lambda/50 focus:border-primary text-black/70"}`}
        placeholder={placeholder}
        required={required}
      />
      <span
        className={`pointer-events-none absolute top-0 left-0 text-sm font-medium transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm ${variant === "light" ? "text-white/70" : "text-lambda"}`}
      >
        {label}
      </span>
    </label>
  );
};

export default Input;
