import Section from "./Section";

const Home = () => {
  return (
<<<<<<< HEAD
    <Section className="relative">
=======
    <Section className="relative pt-40">
>>>>>>> bc8b3ebfd4e8ddbc3bf7746a7a356c4633084f1b
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — TEXT CONTENT */}
        <div>

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl font-semibold mb-6
            text-white animate-softBlink"
          >
            Vanita Gatigennavar
          </h1>
   {/* Role */}
        <div className="flex gap-4 mb-6">
          <span
            className="px-4 py-2 rounded-full
            bg-[#160A2E] border border-white/10
            text-sm text-white animate-softBlink"
          >
            Frontend Developer
          </span>
        </div>
          {/* One strong coding line */}
          <p className="text-xl text-[#C7C3D6] max-w-xl leading-relaxed mb-8">
          Innovate. Implement. Inspire.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-violet-600/30 blur-[120px] rounded-full"></div>

          {/* Image */}
          <div
            className="relative z-10 w-72 h-[420px] rounded-full overflow-hidden
            border border-white/10 shadow-2xl shadow-violet-500/30
            bg-[#160A2E]"
          >
            <img
              src="/vanitag.png"
              alt="Vanita Gatigennavar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Home;
