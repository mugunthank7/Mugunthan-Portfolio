import React from "react";

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", children, ...props },
  ref
) {
  const styles = {
    default: "bg-[#1f6feb] hover:bg-[#388bfd] text-white",
    outline: "bg-transparent border border-[#30363d] text-[#c9d1d9] hover:bg-[#1c2128]",
    ghost: "bg-transparent text-[#c9d1d9] hover:bg-[#1c2128]",
    success: "bg-[#238636] hover:bg-[#2ea043] text-white",
  };

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium
                  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0
                  focus:ring-[#58a6ff] ${styles[variant] || styles.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
