export default function Home() {
  return (
    <section
      className="
        relative w-full overflow-hidden rounded-3xl
        h-[70vh] min-h-[420px]
        sm:h-[78vh] sm:min-h-[520px]
        lg:h-[85vh] lg:min-h-[600px]
      "
    >
      {/* Background Image */}
      <img
        src="/home.png"
        alt="Architectural structure"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end p-6 sm:p-10 lg:p-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-light tracking-[0.08em] sm:text-5xl lg:text-6xl">
            DEVICONS
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-200 sm:mt-5 sm:text-base">
            Architecture, Engineering, Design & Development Management
          </p>
        </div>
      </div>
    </section>
  );
}
