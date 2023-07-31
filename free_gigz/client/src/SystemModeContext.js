import React, { useContext, useState } from "react";

const SystemModeContext = React.createContext();
const SystemModeUpdateContext = React.createContext();

export function useSystemMode() {
  return useContext(SystemModeContext);
}

export function useSystemModeUpdate() {
  return useContext(SystemModeUpdateContext);
}

export function SystemModeProvider({ children }) {
  const [systemMode, setSystemMode] = useState("Freelancer");

  function toggleSystemMode() {
    setSystemMode(systemMode === "Freelancer" ? "Buyer" : "Freelancer");
  }

  return (
    <SystemModeContext.Provider value={systemMode}>
      <SystemModeUpdateContext.Provider value={toggleSystemMode}>
        {children}
      </SystemModeUpdateContext.Provider>
    </SystemModeContext.Provider>
  );
}
