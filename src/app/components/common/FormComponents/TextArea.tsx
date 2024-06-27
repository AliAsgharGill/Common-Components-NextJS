    import React from 'react';

interface TextareaProps {
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  [key: string]: any;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  className = '',
  disabled = false,
  error,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        className={`px-4 py-2 border rounded text-black focus:outline-none focus:border-blue-500 ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-100' : ''}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
