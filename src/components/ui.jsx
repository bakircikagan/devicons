export function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

export function Section({ id, eyebrow, title, lead, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-18 ${className}`}>
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? <p className="text-xs font-semibold tracking-wide text-zinc-500">{eyebrow}</p> : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{title}</h2>
          {lead ? <p className="mt-3 text-sm leading-6 text-zinc-600">{lead}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

export function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      {title ? <h3 className="text-sm font-semibold text-zinc-900">{title}</h3> : null}
      <div className="mt-2 text-sm leading-6 text-zinc-600">{children}</div>
    </div>
  );
}

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

export function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-400"
      : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 focus:ring-zinc-300";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
