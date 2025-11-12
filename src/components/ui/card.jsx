import React from "react";

export const Card = React.forwardRef(function Card({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={`rounded-xl border border-[#30363d] bg-[#161b22] ${className}`}
      {...props}
    />
  );
});

export default Card;
