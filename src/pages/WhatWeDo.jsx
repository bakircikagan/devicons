// const services = [
//   {
//     title: "Owner’s Representation",
//     items: [
//       "Investor-side technical authority",
//       "Governance, reporting, decision support",
//       "Stakeholder alignment and control",
//     ],
//   },
//   {
//     title: "Development & Design Management",
//     items: [
//       "Feasibility and technical strategy",
//       "Multi-discipline design coordination",
//       "Deliverable quality and constructability focus",
//     ],
//   },
//   {
//     title: "Cost, Schedule & Risk Oversight",
//     items: [
//       "Early risk identification and mitigation",
//       "Change impact assessment (time/cost/quality)",
//       "Technical reviews and executive-ready updates",
//     ],
//   },
//   {
//     title: "Technical Due Diligence",
//     items: [
//       "Site / asset technical review",
//       "Risk register and gap assessment",
//       "Recommendations for investment decisions",
//     ],
//   },
//   {
//     title: "Construction Phase Technical Advisory",
//     items: [
//       "Technical control during delivery",
//       "Review of key technical decisions and changes",
//       "Quality oversight through documentation and site reviews",
//     ],
//   },
//   {
//     title: "Specialist Coordination",
//     items: [
//       "Façade / structural / MEP interface alignment",
//       "Manufacturer / supplier coordination support",
//       "Fit-out documentation and implementation readiness",
//     ],
//   },
// ];

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
            DEVELOPMENT
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            We manage all design disciplines on behalf of the owner/investor,
            ensuring alignment between concept, budget, schedule and technical
            requirements. Value engineering strategies are implemented to
            optimize cost and performance without compromising long-term value.
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
            We support the investor in early project stages by evaluating
            feasibility, defining technical strategy and identifying key risks
            before commitments are made.
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
            We represent the investor throughout construction by reviewing
            technical decisions, assessing changes and monitoring impacts on
            cost and schedule.
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
              <li>• Project Development & Feasibility Support</li>
              <li>• Selecting Designer and Engineer Teams</li>
              <li>• Design Management (All Disciplines)</li>
              <li>• Architectural & Interior Works</li>
              <li>• Civil & Structural Works</li>
              <li>• Design & Engineering Coordination</li>
              <li>• Tender & Contractor Coordination</li>
              <li>• Technical Advisory During Construction</li>
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
