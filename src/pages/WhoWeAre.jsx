export default function WhoWeAre() {
  return (
    <div className="space-y-32">

      {/* WHO WE ARE */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
        
        {/* Left text */}
        <div className="space-y-8">
          <h2 className="serif text-5xl font-light tracking-wide">
            Who we are
          </h2>

          <p className="text-zinc-600 leading-relaxed">
            We are an independent, investor-side technical advisory firm specializing 
            in high-rise and complex real estate developments. We align development, 
            design and construction with cost, schedule and risk control — representing 
            the Owner’s/Investor’s interests at every stage.
          </p>

          <ul className="space-y-3 text-zinc-700">
            <li>• Independent Technical Partner for Owners / Investors</li>
            <li>• We work exclusively in the interest of the Owner/Investor</li>
            <li>• One Technical Voice on Behalf of the Owner/Investor</li>
            <li>• We step in before problems become costs</li>
            <li>• Owner-Focused services across the project lifecycle</li>
          </ul>
        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="grid gap-20 lg:grid-cols-2">

        <div className="space-y-6">
          <div className="h-16 w-2 bg-zinc-400" />
          <h3 className="serif text-4xl font-light">Vision</h3>
          <p className="text-zinc-600 leading-relaxed">
            To be a trusted and preferred independent partner in complex real estate and 
            high-rise developments, leading with integrity and technical excellence 
            while setting the benchmark for investor-side representation.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            We envision transforming projects through disciplined risk management, sustainable thinking 
            and early, value-driven decision-making-ensuring clarity, control and long-term asset performance.
          </p>
        </div>

        <div className="space-y-6 text-right">
          <div className="ml-auto h-16 w-2 bg-zinc-400" />
          <h3 className="serif text-4xl font-light">Mission</h3>
          <p className="text-zinc-600 leading-relaxed">
            DEVICONS exists to represent the investor with one clear and independent technical voice 
            throughout the entire project lifecycle.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            We deliver disciplined development, design and construction management solutions with 
            integrity and collaboration, protecting value, reducing risk from concept to completion.
          </p>
        </div>

      </section>

      
      {/* OUR TEAM */}
      <section className="space-y-12">
        <h3 className="serif text-5xl font-light">Our Team</h3>

        {(() => {
          const members = [
            {
              name: "Tumay Dogan, PE",
              role: "Managing Partner",
              desc: "Structural Design Principal",
            },
            {
              name: "Kadri Filiz, MBA",
              role: "Managing Partner",
              desc: "Architectural Design Principal",
            },
            {
              name: "Alp Gol, PMP",
              role: "Construction Executive",
              desc: "",
            },
            {
              name: "Zeycan Onder",
              role: "Architectural Consultant",
              desc: "",
            },
            {
              name: "Mustafa Bektas, PE, SE",
              role: "Structural Design Manager",
              desc: "Head of Inspection",
            },
          ];

          const top = members.slice(0, 2);
          const bottom = members.slice(2);

          const Card = ({ member }) => (
            <div className="rounded-xl bg-zinc-100 p-6 text-center shadow-sm">
              <div className="font-medium">{member.name}</div>
              <div className="mt-2 text-sm text-zinc-600">{member.role}</div>
              {member.desc ? (
                <div className="text-sm text-zinc-500">{member.desc}</div>
              ) : null}
            </div>
          );

          return (
            <>
              {/* Top row: 2 cards */}
              <div className="grid gap-6 sm:grid-cols-2">
                {top.map((member) => (
                  <Card key={member.name} member={member} />
                ))}
              </div>

              {/* Bottom row: 3 cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bottom.map((member) => (
                  <Card key={member.name} member={member} />
                ))}
              </div>
            </>
          );
        })()}
      </section>
    </div>
  );
}
