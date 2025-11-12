import React, { createContext, useContext, useMemo, useState } from "react";

const TabsCtx = createContext(null);

export function Tabs({ value, onValueChange, defaultValue, children, className = "" }) {
  const [internal, setInternal] = useState(defaultValue ?? value);
  const controlled = value !== undefined;
  const current = controlled ? value : internal;

  const api = useMemo(
    () => ({
      value: current,
      setValue: (v) => {
        if (!controlled) setInternal(v);
        onValueChange?.(v);
      },
    }),
    [current, controlled, onValueChange]
  );

  return <TabsCtx.Provider value={api}><div className={className}>{children}</div></TabsCtx.Provider>;
}

export function TabsList({ children, className = "" }) {
  return (
    <div role="tablist" className={`inline-grid gap-2 p-1 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = "" }) {
  const { value: current, setValue } = useContext(TabsCtx);
  const active = current === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => setValue(value)}
      className={`px-3 py-2 text-sm rounded-md transition-colors
                  ${active ? "bg-[#1f6feb] text-white" : "text-[#7d8590] hover:bg-[#1c2128]"}
                  ${className}`}
      data-state={active ? "active" : "inactive"}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "" }) {
  const { value: current } = useContext(TabsCtx);
  if (current !== value) return null;
  return <div className={className}>{children}</div>;
}

export default { Tabs, TabsList, TabsTrigger, TabsContent };
