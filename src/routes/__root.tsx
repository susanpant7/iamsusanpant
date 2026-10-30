import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/header/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen text-black overflow-x-hidden">
      <Header />
      <Outlet />
      <footer className="py-4 pb-28 md:pb-4 text-center text-gray-500 text-xs sk-emboss">
        © 2026 Susan Pant
      </footer>
    </div>
  );
}
