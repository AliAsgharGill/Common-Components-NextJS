import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  icon?: React.ReactNode;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  className = "",
  disabled = false,
  error,
  icon,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`px-4 py-2 border rounded text-black focus:outline-none focus:border-blue-500 ${
          icon ? "pl-10" : ""
        } ${error ? "border-red-500" : "border-gray-300"} ${
          disabled ? "bg-gray-100" : ""
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
