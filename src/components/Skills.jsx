import Section from "./Section";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Redux",
  "REST API",
];

const Skills = () => (
  <Section>
    <h2 className="text-4xl font-semibold mb-14 text-center">Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map(skill => (
        <div
          key={skill}
          className="bg-[#160A2E] rounded-2xl p-6 text-center
          shadow-lg shadow-violet-500/10 hover:shadow-violet-500/30
          hover:-translate-y-1 transition"
        >
          {skill}
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
