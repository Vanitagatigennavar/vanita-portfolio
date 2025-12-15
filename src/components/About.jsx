import Section from "./Section";

const About = () => (
  <Section id="about">
    <div className="grid md:grid-cols-2 gap-20 items-start">

      {/* LEFT — CONTENT */}
      <div>
        {/* Name */}
        <h2
          className="relative inline-block text-4xl md:text-5xl font-semibold mb-4
          bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400
          bg-clip-text text-transparent
          animate-softBlink"
        >
          Vanita Gatigennavar
        </h2>

     

        {/* Short value line */}
       {/* VALUE STATEMENT */}
<p className="text-xl text-white mb-6 max-w-xl">
  I design and build clean, scalable, and user-friendly web interfaces.
</p>

{/* SUPPORTING PARAGRAPH */}
<p className="text-[#C7C3D6] leading-relaxed max-w-xl mb-6">
  I’m a qualified Software Developer with hands-on experience building
  responsive, user-focused applications using React, HTML, CSS, Bootstrap,
  and Tailwind CSS. I work comfortably with JavaScript and Node.js to create
  dynamic, maintainable interfaces.
</p>

{/* QUICK HIGHLIGHTS */}
<ul className="space-y-3 text-[#C7C3D6] mb-6">
  <li className="flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
    Strong focus on frontend architecture & UI consistency
  </li>
  <li className="flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
    Experience with modern React patterns & reusable components
  </li>
  <li className="flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
    Passion for performance, accessibility, and clean code
  </li>
</ul>

{/* MINDSET (SUBTLE, NOT DOMINANT) */}
<p className="text-white/80 animate-softBlink">
  Continuously improving and exploring modern frontend technologies.
</p>

      </div>

      {/* RIGHT — CERTIFICATIONS */}
      <div
        className="bg-gradient-to-br from-[#160A2E] to-[#110720]
        rounded-3xl p-8 border border-white/10
        shadow-xl shadow-violet-500/20"
      >
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Certifications
        </h3>

        <div className="space-y-6">
          {/* Certification Item */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg font-medium text-white">
                Full Stack Developer
              </p>
              <p className="text-sm text-[#C7C3D6]">
                Xworkz ODC Bengaluru
              </p>
            </div>

            <span className="text-sm text-violet-400">
              2022 June – 2023 Jan
            </span>
          </div>
        </div>
      </div>

    </div>
  </Section>
);

export default About;
