import Section from "./Section";

const projects = [
  {
    title: "Job Search App",
    description:
      "Developed a job search platform using React.js and Material UI with advanced filtering capabilities.",
    points: [
      "Implemented filters such as role, location, and experience to help users quickly find relevant jobs.",
      "Added infinite scroll functionality for continuous job loading, resulting in smoother navigation and improved user engagement.",
    ],
    tech: ["React.js", "Material UI", "JavaScript", "REST API"],
  },
  {
    title: "Text Utility App",
    description:
      "Built a text utility tool using React.js focused on efficient text manipulation.",
    points: [
      "Provided features like converting text to uppercase/lowercase, copying text to clipboard.",
      "Added light and dark mode support to improve accessibility and user comfort.",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "HTML"],
  },
];

const Projects = () => (
  <Section id="projects">
    <h2 className="text-4xl font-semibold mb-14 text-center">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-gradient-to-br from-[#160A2E] to-[#110720]
          rounded-3xl p-8 shadow-xl shadow-violet-500/20
          hover:shadow-violet-500/40 transition"
        >
          <h3 className="text-2xl font-semibold mb-3">
            {project.title}
          </h3>

          <p className="text-[#C7C3D6] mb-5">
            {project.description}
          </p>

          <ul className="space-y-3 text-[#C7C3D6] list-disc list-inside mb-6">
            {project.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* TECH STACK */}
          <div className="flex flex-wrap items-center gap-4">
          <span
  className="text-sm uppercase tracking-widest text-violet-400
  animate-glow"
>
  Tech
</span>


            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-sm rounded-full
                  bg-[#160A2E] border border-white/10
                  text-[#C7C3D6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
