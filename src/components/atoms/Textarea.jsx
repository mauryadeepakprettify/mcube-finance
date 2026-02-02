const Textarea = ({
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
        <div className={`relative w-full ${className}`}>
            <textarea
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                rows={rows}
                placeholder={placeholder}
                required={required}
                className="peer border-lambda/50 focus:border-primary w-full resize-none border-b bg-transparent pt-5 pb-2 text-alpha transition-all duration-500 ease-in-out outline-none"
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

export default Textarea;