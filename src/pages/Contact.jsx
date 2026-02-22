const items = [
  {
    icon: "mail",
    title: "Email",
    lines: ["info@devicons.com.tr", "info@devicons.us"],
    href: "mailto:info@devicons.com.tr",
  },
  {
    icon: "globe",
    title: "Web",
    lines: ["devicons.com.tr", "devicons.us"]
  },
  {
    icon: "pin",
    title: "New York Office",
    lines: ["1740 Broadway, 15th Floor", "New York, NY 10019, USA"],
    mapQuery: "1740 Broadway, 15th Floor, New York, NY 10019",
  },
  {
    icon: "pin",
    title: "Istanbul Office",
    lines: ["Atatürk Mah. Sait Cordan Sok. No:10", "Ataşehir 34642, Istanbul, Türkiye"],
    mapQuery: "Atatürk Mah. Sait Cordan Sok. No:10 Ataşehir 34642 İstanbul",
  },
];

function Icon({ name }) {
  // Minimal inline SVG icons (no extra deps)
  const cls = "h-6 w-6 text-zinc-500";
  if (name === "mail") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m5 7 7 6 7-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3 12h18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 3c2.6 2.7 4 5.7 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.7-4-9s1.4-6.3 4-9Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }
  // pin
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5 6-11a6 6 0 1 0-12 0c0 6 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function mapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsEmbed(query) {
  // Keyless simple embed via query; usually works fine for basic use.
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export default function Contact() {
  const ny = items.find((i) => i.title === "New York Office")?.mapQuery;
  const ist = items.find((i) => i.title === "Istanbul Office")?.mapQuery;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
      {/* Left big block like the slide */}
      <aside className="lg:col-span-4">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-200 p-10">
          <div className="absolute left-0 top-0 h-full w-4 bg-zinc-500/70" />
          <h1 className="serif text-5xl font-light leading-[1.05] tracking-wide text-zinc-900">
            Get In
            <br />
            Touch
            <br />
            With Us
          </h1>
        </div>
      </aside>

      {/* Right content */}
      <section className="lg:col-span-8">
        <div className="space-y-6">
          {items.map((it) => {
            const href = it.href ?? (it.mapQuery ? mapsLink(it.mapQuery) : undefined);

            const CardInner = (
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-zinc-300">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100">
                  <Icon name={it.icon} />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold text-zinc-900">{it.title}</div>

                  <div className="mt-2 space-y-1 text-sm text-zinc-600">
                    {it.lines.map((l) => (
                      <div key={l} className="leading-6">
                        {l}
                      </div>
                    ))}
                  </div>

                  {it.mapQuery && (
                    <div className="mt-2 text-xs font-semibold text-zinc-500 group-hover:text-zinc-700">
                      Open in Google Maps →
                    </div>
                  )}
                </div>
              </div>
            );

            return href ? (
              <a
                key={it.title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group block"
              >
                {CardInner}
              </a>
            ) : (
              <div key={it.title} className="group">
                {CardInner}
              </div>
            );
          })}
        </div>

        {/* Maps (two tabs-ish layout) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-900">
              New York
            </div>
            <iframe
              title="New York Office Map"
              src={mapsEmbed(ny)}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-900">
              Istanbul
            </div>
            <iframe
              title="Istanbul Office Map"
              src={mapsEmbed(ist)}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          If the embedded map does not load due to browser privacy settings, use the “Open in Google Maps” links above.
        </p>
      </section>
    </div>
  );
}
