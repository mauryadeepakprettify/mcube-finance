"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import useClickOutside from "@/hooks/useClickOutside";

const Select = ({
  variant = "",
  label,
  name,
  id,
  onChange,
  value,
  required = false,
  options = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleSelect = (val) => {
    onChange?.({
      target: {
        name,
        value: val,
      },
    });
    setIsOpen(false);
  };

  return (
    <>
      <div
        ref={selectRef}
        className={`relative min-h-[40px] w-full cursor-pointer border-b ${
          variant === "light"
            ? "border-white/70 text-white/70"
            : "border-lambda/50 text-black/70"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="absolute bottom-[6px] left-0">{value || label}</span>
        <Icon
          className={`fi-rr-angle-small-down absolute right-0 bottom-[6px] transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
        />

        {isOpen && (
          <ul className="text-primary absolute top-full z-10 w-full rounded-b-lg bg-white shadow-md">
            <li className="bg-beta cursor-default px-2 py-1 text-black/50">
              {label}
            </li>

            {options.map((opt) => (
              <li
                key={opt}
                className={`cursor-pointer px-2 py-1 ${value === opt ? "bg-primary font-medium text-white" : ""}`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>

      <select
        className="hidden"
        name={name}
        id={id}
        value={value}
        required={required}
        onChange={onChange}
        readOnly
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
