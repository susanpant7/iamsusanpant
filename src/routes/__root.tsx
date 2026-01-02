import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/header/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-[#020617] min-h-screen selection:bg-blue-500/30 text-white overflow-x-hidden">
      <Header />
      <Outlet />
      <footer className="py-2 text-center text-gray-600 text-xs">
        © 2026 Susan Pant
      </footer>
    </div>
  );
}
