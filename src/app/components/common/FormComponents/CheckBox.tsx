import React from "react";

interface CheckboxProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  [key: string]: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = "",
  disabled = false,
  error,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="flex items-center">
        <input
          type="checkbox"
          disabled={disabled}
          className={`form-checkbox h-5 w-5 text-blue-600 ${
            error ? "border-red-500" : "border-gray-300"
          } ${disabled ? "bg-gray-100" : ""}`}
          {...props}
        />
        {label && <span className="ml-2 text-gray-700">{label}</span>}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Checkbox;
