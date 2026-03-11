export default function Home() {
  return (
    <section
      className="
        relative w-full overflow-hidden rounded-3xl bg-gray
        h-[70vh] min-h-[420px]
        sm:h-[78vh] sm:min-h-[520px]
        lg:h-[85vh] lg:min-h-[600px]
      "
    >
      <img
        src="/home.png"
        alt="Architectural skyline"
        className="absolute inset-0 h-full w-full object-contain"
      />

      {/* Top-right text */}
      <div className="absolute right-6 top-3 z-10 max-w-md text-right sm:right-10 sm:top-6 lg:right-16 lg:top-10">
        <p className="text-sm font-bold italic leading-relaxed text-zinc-800 sm:text-base lg:text-lg">
            Technical Advisory Firm Specializing in HighRise and Complex Real Estate Developments
        </p>
      </div>

      {/* Bottom-left logo */}
      {/* <div className="absolute bottom-6 left-6 z-10 rounded-2xl bg-white/100 p-4 backdrop-blur sm:bottom-10 sm:left-10 lg:bottom-16 lg:left-16">
        <img
          src="/devicons-logo.png"
          alt="devicons"
          className="h-20 w-auto sm:h-24 lg:h-32"
          loading="eager"
        />
      </div> */}
      {/* <div className="absolute bottom-6 left-6 z-10 sm:bottom-10 sm:left-10 lg:bottom-16 lg:left-16">
        <img
          src="/devicons-logo.png"
          alt="devicons"
          className="h-20 w-auto sm:h-24 lg:h-32"
          loading="eager"
        />
      </div> */}
    </section>
  );
}