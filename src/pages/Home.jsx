export default function Home() {
  return (
    <section className="w-full">
      <div className="relative">
        <img
          src="/home.png"
          alt="Architectural skyline"
          className="w-full object-contain"
        />

        <div className="absolute right-4 top-4 max-w-[320px] text-right sm:right-8 sm:top-8 sm:max-w-[420px] lg:right-12 lg:top-10 lg:max-w-[520px]">
          <p className="text-sm font-bold italic leading-relaxed text-zinc-800 sm:text-base lg:text-lg">
            Technical Advisory Firm Specializing in HighRise and Complex Real Estate Developments
          </p>
        </div>
      </div>
    </section>
  );
}