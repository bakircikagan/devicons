export default function Home() {
  return (
    <section className="w-full">
      <div className="relative">
        <img
          src="/home.png"
          alt="Architectural skyline"
          className="w-full object-contain"
        />

        <div className="absolute bottom-16 left-1/2 z-10 w-[72%] max-w-[760px] -translate-x-1/2 sm:bottom-10 lg:bottom-20">
          <div className="rounded-xl bg-white/45 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
            <p className="text-center text-sm font-bold leading-relaxed text-zinc-800 sm:text-base lg:text-lg">
              Technical Leadership for Megatall and Supertall Developments —
            </p>
            <p className="text-center text-sm font-bold leading-relaxed text-zinc-800 sm:text-base lg:text-lg">
              Integrated Project Delivery Aligning Design, Engineering and Construction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}