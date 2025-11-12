import React from "react";

export function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[#30363d] px-2 py-1
                  text-xs font-medium bg-[#1c2128] text-[#7d8590] ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
