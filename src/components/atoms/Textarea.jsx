const Textarea = ({
  variant = "",
  label,
  name,
  id,
  onChange,
  value,
  placeholder = "",
  rows = 1,
  className = "",
  required = false,
}) => {
  return (
    <label className={`relative w-full ${className}`}>
      <textarea
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`peer  w-full resize-none border-b bg-transparent pt-5 pb-2  transition-all duration-500 ease-in-out outline-none ${variant === "light" ? "text-white/70 border-white/70 focus:border-white " : "border-lambda/50 focus:border-primary text-black/70"}`}
      />
      <span className={`pointer-events-none absolute top-0 left-0 text-sm font-medium transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm ${variant === "light" ? "text-white/70" : "text-lambda"}`}>
        {label}
      </span>
    </label>
  );
};

export default Textarea;
