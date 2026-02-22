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
        <header className="sticky top-0 z-20 border-b border-zinc-200 bg-zinc-100/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-10 px-4 py-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3">
            <img
                src="/devicons-navbar-logo.png"
                alt="DEVICONS"
                className="h-9 w-auto"
                loading="eager"
            />
            <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">DEVICONS</div>
                <div className="text-xs text-zinc-500">devicons.com.tr</div>
            </div>
        </NavLink>


          <nav className="ml-auto hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-zinc-900 font-semibold underline underline-offset-8 decoration-zinc-300"
                    : "hover:text-zinc-900"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <Outlet />
        </main>

      <footer className="border-t border-zinc-200 bg-zinc-100 py-10">
        <div className="mx-auto max-w-6xl px-4 text-xs text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} DEVICONS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
