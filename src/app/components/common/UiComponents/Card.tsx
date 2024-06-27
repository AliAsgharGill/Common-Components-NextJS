import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', header, footer }) => {
  return (
    <div className={`bg-white text-black rounded-lg shadow-md ${className}`}>
      {header && <div className="px-4 py-2 border-b">{header}</div>}
      <div className="p-4">{children}</div>
      {footer && <div className="px-4 py-2 border-t">{footer}</div>}
    </div>
  );
};

export default Card;
