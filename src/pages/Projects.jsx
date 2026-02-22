import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PROJECTS = [
  {
    slug: "iq-quarter",
    name: "IQ Quarter in MIBC",
    meta: [
      ["Height", "178 m"],
      ["Floors", "42"],
      ["Location", "Moscow, Russia"],
      ["Year", "2008–2010"],
      ["Concept", "NBBJ Architecture"],
    ],
    scope: [
      "Schematic and Design Development for Structural Engineering",
      "Peer Review",
    ],
    images: {
      hero: "/projects/iq/hero.png",
      top1: "/projects/iq/top1.png",
      top2: "/projects/iq/top2.png",
    },
  },
  {
    slug: "cooltoren",
    name: "Cooltoren Residence",
    meta: [
      ["Height", "150 m"],
      ["Floors", "50"],
      ["Location", "Rotterdam, The Netherlands"],
      ["Year", "2016–2018"],
      ["Contractor", "Ballast Nedam"],
      ["Concept", "V8 Architects"],
    ],
    scope: [
      "Management / supervision of architectural design works execution",
      "Coordination of design works across disciplines (Interior, Structural, MEP, Façade, Fire Protection)",
      "Design solutions with manufacturers (Façade systems, etc.)",
      "Architectural shop drawings and interior finish coordination",
    ],
    images: {
      hero: "/projects/cooltoren/hero.png",
      top1: "/projects/cooltoren/top1.png",
      top2: "/projects/cooltoren/top2.png",
    },
  },
  {
    slug: "brooklyn-tower",
    name: "Brooklyn Tower at 9 DeKalb Avenue",
    meta: [
      ["Height", "325 m"],
      ["Floors", "93"],
      ["Location", "New York, USA"],
      ["Year", "2020"],
      ["Owner", "JDS Development Group"],
      ["Architect", "SHoP Architects"],
      ["Structural Engineer", "WSP"],
      ["Construction Manager", "JDS Construction Group"],
    ],
    scope: [
      "Inspection of cast-in-place concrete, post-tensioned floors, foundations",
      "Composite steel floors, welding, underpinning",
      "Non-destructive testing (NDT)",
    ],
    images: {
      hero: "/projects/brooklyn/hero.png",
      top1: "/projects/brooklyn/top1.png",
      top2: "/projects/brooklyn/top2.png",
    },
  },
];

function findProject(slug) {
  return PROJECTS.find((p) => p.slug === slug) ?? PROJECTS[0];
}

export default function Projects() {
  const navigate = useNavigate();
  const params = useParams();
  const selected = findProject(params.slug);

  // If user visits /projects (no slug), push first project.
  useEffect(() => {
    if (!params.slug) navigate(`/projects/${PROJECTS[0].slug}`, { replace: true });
  }, [params.slug, navigate]);

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="serif text-5xl font-light tracking-wide text-zinc-900">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Selected experience across international developments. Choose a project to view key details and scope.
          </p>
        </div>

        <div className="w-full sm:w-[320px]">
          <label className="mb-2 block text-xs font-semibold text-zinc-600">
            Select project
          </label>
          <select
            value={selected.slug}
            onChange={(e) => navigate(`/projects/${e.target.value}`)}
            className="h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
          >
            {PROJECTS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <ProjectSlide project={selected} />
    </div>
  );
}

function ProjectSlide({ project }) {
  return (
    <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
      {/* Left large image */}
      <div className="lg:col-span-5">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <img
            src={project.images.hero}
            alt={project.name}
            className="h-[520px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right images + info */}
      <div className="space-y-6 lg:col-span-7">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <img
              src={project.images.top1}
              alt={`${project.name} view 1`}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <img
              src={project.images.top2}
              alt={`${project.name} view 2`}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Gray info box */}
        <div className="rounded-2xl bg-zinc-200 p-8">
          <div className="text-sm font-semibold text-zinc-900">
            {project.name}
          </div>

          <div className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {project.meta.map(([k, v]) => (
              <div key={k} className="text-sm text-zinc-700">
                <span className="font-medium text-zinc-800">{k}:</span>{" "}
                {v}
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm font-semibold text-zinc-800">
            Scope of Works
          </div>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700">
            {project.scope.map((s) => (
              <li key={s} className="leading-6">
                • {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
