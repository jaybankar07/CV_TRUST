import React from "react";
import { useAssurance } from "./context/AssuranceContext";
import { LandingPage } from "./components/public/LandingPage";
import { AccessConsolePage } from "./components/public/AccessConsolePage";
import { ConsoleShell } from "./components/console/ConsoleShell";

export const AppController: React.FC = () => {
  const { mode, user } = useAssurance();

  if (mode === "public") {
    return <LandingPage />;
  }

  if (mode === "console" && !user.isAuthenticated) {
    return <AccessConsolePage />;
  }

  return <ConsoleShell />;
};
