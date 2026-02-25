export default function WhatWeDo() {
  return (
    <div className="space-y-28">
      {/* ===== WHAT WE DO HEADER ===== */}
      <section className="text-center">
        <h1 className="serif text-6xl font-light tracking-wide text-zinc-900">
          What We Do
        </h1>
      </section>

      {/* ===== THREE CORE AREAS ===== */}
      <section className="grid gap-12 lg:grid-cols-3">
        {/* Development */}
        <div className="space-y-6 text-center">
          <img
            src="/dev.png"
            alt="Development"
            className="mx-auto h-64 w-full rounded-xl object-cover"
          />
          <h2 className="serif text-2xl tracking-[0.2em] text-zinc-800">
            DESIGN & DEVELOPMENT MANAGEMENT
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            We manage real estate development on behalf of the Owner/Investor, 
            with a strong focus on high-rise and complex mixed-use projects.
            Our scope includes feasibility and market assessments, 
            defining scope, budget and schedule, coordinating concept and detailed 
            design with leading architects and engineers, managing permitting processes, 
            financial oversight and risk monitoring - ensuring early alignment between strategy, 
            design integrity and long-term asset value.
          </p>
        </div>

        {/* Preconstruction */}
        <div className="space-y-6 text-center">
          <img
            src="/precon.png"
            alt="Preconstruction"
            className="mx-auto h-64 w-full rounded-xl object-cover"
          />
          <h2 className="serif text-2xl tracking-[0.2em] text-zinc-800">
            PRECONSTRUCTION
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
              Devicons leads preconstruction planning to ensure projects are fully aligned before execution begins.
              We assess feasibility, permitting risks, constructability, phasing strategies and budget alignment while refining scope, schedules and mitigation plans. 
              Through design optimization and value engineering, we identify cost-saving opportunities early and establish a clear execution roadmap.
          </p>
        </div>

        {/* Construction */}
        <div className="space-y-6 text-center">
          <img
            src="/construction.png"
            alt="Construction Management"
            className="mx-auto h-64 w-full rounded-xl object-cover"
          />
          <h2 className="serif text-2xl tracking-[0.2em] text-zinc-800">
            CONSTRUCTION MANAGEMENT
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Devicons represents the investor throughout construction, ensuring disciplined control of cost, 
            schedule and quality. Construction management requires discipline, 
            experience and proactive leadership. 
            We monitor execution, evaluate changes and act early to prevent issues - protecting 
            investor interests rather than merely reporting project status.

          </p>
        </div>
      </section>

      {/* ===== OUR SERVICES SECTION ===== */}
      <section className="grid gap-16 lg:grid-cols-12 lg:items-center">
        {/* Left Grey Block */}
        <div className="lg:col-span-6">
          <h2 className="serif mb-8 text-5xl font-light">Our Services</h2>

          <div className="rounded-2xl bg-zinc-200 p-8">
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
              <li>• Designer & Consultant Selection Strategy</li>
              <li>• Integrated Design Management (All Disciplines)</li>  
              <li>• Architectural & Structural Design Oversight</li>
              <li>• Tender Strategy & Contractor Alignment</li>
              <li>• Construction Phase Technical Advisory & Risk Control</li>
              <li>• Value Engineering & Structural Optimization</li>
              <li>• Real Estate Development Advisory & Feasibility</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6">
          <img
            src="/services.png"
            alt="Services"
            className="h-[420px] w-full rounded-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
