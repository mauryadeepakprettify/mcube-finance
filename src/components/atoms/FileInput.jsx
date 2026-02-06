"use client";

import { useState } from "react";
import Icon from "./Icon";

const FileInput = ({ label, name, id, value, variant, onChange }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    onChange(e);
  };

  return (
    <div
      className={`relative min-h-[40px] border-b ${variant === "light" ? "border-white/70 text-white/70 focus:border-white " : "border-lambda/50 focus:border-primary text-black/70"}`}
    >
      <label className="absolute bottom-[4px] left-0" htmlFor={id}>
        {file?.name || label}
      </label>
      <span className="absolute right-0 bottom-[2px]">
        <Icon className="fi-rr-link-alt text-sm" />
      </span>
      <input
        className="absolute inset-0 size-full cursor-pointer opacity-0"
        type="file"
        value={value}
        id={id}
        name={name}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
