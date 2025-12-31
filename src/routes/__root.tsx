import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/header/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    // This wrapper ensures every page has the same dark background and blue selection
    <div className="bg-[#020617] min-h-screen selection:bg-blue-500/30 text-white overflow-x-hidden">
      <Header />

      {/* Outlet renders the specific page (Home, Courses, etc.) */}
      <Outlet />
      <footer className="py-10 text-center text-gray-600 text-xs border-t border-white/5">
        © 2026 Susan Pant
      </footer>
    </div>
  );
}
