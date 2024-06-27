import React from "react";

interface ToggleSwitchProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  [key: string]: any;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  className = "",
  disabled = false,
  error,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <div
        className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <input
          type="checkbox"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          disabled={disabled}
          {...props}
        />
        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ToggleSwitch;
