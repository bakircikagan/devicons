export default function Contact() {
  const ny = "1740 Broadway, 15th Floor, New York, NY 10019, USA";
  const ist = "Atatürk Mah. Sait Çordan Sok. No:10, Ataşehir 34642, Istanbul, Türkiye";
  const mapsEmbed = (q) =>
    `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`;
  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-2">
        {/* LEFT: Get in touch */}
        <div className="rounded-2xl bg-zinc-200 p-10">
          <div className="max-w-sm">
            <h1 className="serif text-6xl font-light leading-[1.05] text-zinc-900">
              Get In
              <br />
              Touch
              <br />
              With Us
            </h1>
          </div>
        </div>

        {/* RIGHT: Email + Web stacked */}
        <div className="grid gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-xl">
                ✉
              </div>
              <div>
                <div className="text-xl font-semibold text-zinc-900">Email</div>
                <div className="mt-3 space-y-2 text-lg text-zinc-700">
                  <div>info@devicons.us</div>
                  <div>info@devicons.com.tr</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-xl">
                🌐
              </div>
              <div>
                <div className="text-xl font-semibold text-zinc-900">Web</div>
                <div className="mt-3 space-y-2 text-lg text-zinc-700">
                  <div>devicons.us</div>
                  <div>devicons.com.tr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices row */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-xl">
              📍
            </div>
            <div>
              <div className="text-xl font-semibold text-zinc-900">
                New York Office
              </div>
              <div className="mt-3 space-y-1 text-lg leading-relaxed text-zinc-700">
                <div>1740 Broadway, 15th Floor</div>
                <div>New York, NY 10019, USA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-xl">
              📍
            </div>
            <div>
              <div className="text-xl font-semibold text-zinc-900">
                Istanbul Office
              </div>
              <div className="mt-3 space-y-1 text-lg leading-relaxed text-zinc-700">
                <div>Atatürk Mah. Sait Çordan Sok. No:10</div>
                <div>Ataşehir 34642, Istanbul, Türkiye</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps row */}
              <div className="mt-10 grid gap-6 lg:col-span-2 lg:grid-cols-2">
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
    </div>
  );
}