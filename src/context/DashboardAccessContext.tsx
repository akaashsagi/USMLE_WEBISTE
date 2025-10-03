"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from "react";

type DashboardAccessContextType = {
  hasVisitedDashboard: boolean;
  setHasVisitedDashboard: (value: boolean) => void;
};

const DashboardAccessContext = createContext<DashboardAccessContextType | undefined>(undefined);

export const DashboardAccessProvider = React.memo(function DashboardAccessProvider({ children }: { children: ReactNode }) {
  const [hasVisitedDashboard, setHasVisitedDashboard] = useState(false);

  const setHasVisitedDashboardCallback = useCallback((value: boolean) => {
    setHasVisitedDashboard(value);
  }, []);

  const contextValue = useMemo(() => ({
    hasVisitedDashboard,
    setHasVisitedDashboard: setHasVisitedDashboardCallback,
  }), [hasVisitedDashboard, setHasVisitedDashboardCallback]);

  return (
    <DashboardAccessContext.Provider value={contextValue}>
      {children}
    </DashboardAccessContext.Provider>
  );
});

export function useDashboardAccess() {
  const context = useContext(DashboardAccessContext);
  if (!context) {
    throw new Error("useDashboardAccess must be used within DashboardAccessProvider");
  }
  return context;
}