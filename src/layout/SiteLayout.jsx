import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/who-we-are" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      {/* HEADER (bigger) */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-zinc-200">
        <div className="mx-auto flex max-w-[1400px] items-center gap-10 px-4 py-8 sm:px-6">
          <NavLink to="/" className="flex items-center gap-5">
            <img
              src="/devicons-logo.png"
              alt="devicons"
              className="h-14 w-auto"
              loading="eager"
            />

            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-tight lowercase">
                devicons
              </div>
              <div className="mt-1 text-base text-zinc-600">
                Architecture, Engineering, Design &amp; Development Management
              </div>
            </div>
          </NavLink>

          <nav className="ml-auto hidden items-center gap-10 text-lg text-zinc-600 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-zinc-900 font-semibold underline underline-offset-8 decoration-zinc-300"
                    : "hover:text-zinc-900 transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-zinc-100 py-10">
        <div className="mx-auto max-w-[1400px] px-4 text-xs text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} devicons. All rights reserved.
        </div>
      </footer>
    </div>
  );
}