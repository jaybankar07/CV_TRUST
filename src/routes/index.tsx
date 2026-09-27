import { createFileRoute } from "@tanstack/react-router";
import { AssuranceProvider } from "../context/AssuranceContext";
import { AppController } from "../AppController";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <AssuranceProvider>
      <AppController />
    </AssuranceProvider>
  );
}
