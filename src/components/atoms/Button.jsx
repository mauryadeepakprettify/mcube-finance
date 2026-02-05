const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
  variant = "fill",
}) => {
  const variants = {
    outline:
      "border border-lambda text-lambda hover:bg-primary hover:text-white hover:border-primary",
    fill: "bg-primary border border-primary text-white hover:bg-primary/80 hover:border-primary/80",
    white: "bg-white border border-white text-primary hover:bg-primary hover:text-white hover:border-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 px-[20px] py-[8px] text-sm transition-all duration-300 ease-in-out lg:text-base ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
