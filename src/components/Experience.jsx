import Section from "./Section";

const experiences = [
  {
    role: "Software Developer",
    company: "SPM Global Technologies",
    duration: "June 2024 – Present",
    location: "Bangalore",
    isCurrent: true,
    points: [
      "Developed responsive and user-friendly interfaces using React, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS.",
      "Built reusable components using Hooks, Context API, memoization, and lazy loading to improve performance.",
      "Integrated REST APIs and managed efficient state flow across applications.",
      "Collaborated closely with designers and backend teams to deliver pixel-perfect, high-quality UI screens."
    ],
  },
  {
    role: "Junior Software Developer",
    company: "SPM Global Technologies",
    duration: "March 2023 – May 2024",
    location: "Bangalore",
    isCurrent: false,
    points: [
      "Worked on building responsive web interfaces using React and modern CSS frameworks.",
      "Implemented reusable UI components and followed best practices for clean code.",
      "Assisted in API integration and debugging UI issues across different browsers."
    ],
  },
];

const Experience = () => (
  <Section id="experience">
    <h2 className="text-4xl font-semibold text-center mb-8">
      Experience
    </h2>

    <div className="relative border-l border-violet-500/30 pl-6 space-y-16">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">

          {/* Timeline Dot */}
          <span
            className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full
            bg-violet-500 shadow-lg shadow-violet-500/50
            ${exp.isCurrent ? "animate-pulse" : ""}`}
          />

          {/* Card */}
          <div
            className={`bg-[#160A2E] rounded-3xl p-8
            shadow-xl shadow-violet-500/20
            ${exp.isCurrent ? "animate-soft-pulse" : ""}`}
          >
            <h3 className="text-2xl font-semibold">
              {exp.role}
            </h3>

            <p className="text-violet-400 mt-1">
              {exp.company}
            </p>

            <p className="text-sm text-[#C7C3D6] mt-1">
              {exp.duration} · {exp.location}
            </p>

            {/* Current Role Badge */}
            {exp.isCurrent && (
              <span
                className="inline-block mt-4 px-4 py-1 text-xs rounded-full
                bg-violet-600/20 text-violet-400
                border border-violet-500/30"
              >
                Current Role
              </span>
            )}

            <ul className="mt-6 space-y-3 text-[#C7C3D6] list-disc list-inside">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
