
const Button = ({ children, onClick, className, type = "button", disabled = false, variant = "fill" }) => {

    const variants = {
        outline: "border border-lambda text-lambda hover:bg-primary hover:text-white hover:border-primary",
        fill: "bg-primary border border-primary text-white hover:bg-primary/80 hover:border-primary/80"
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer lg:text-base text-sm flex items-center gap-2 transition-all duration-300 ease-in-out py-[8px] px-[20px] ${variants[variant]} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button