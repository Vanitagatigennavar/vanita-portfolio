const Navbar = ({ setActiveSection }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-[#110720]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          {/* Logo → goes to ABOUT */}
         <button
  onClick={() => setActiveSection("home")}
  className="flex items-center gap-3 font-semibold text-lg
  hover:opacity-90 transition"
>
  {/* LOGO */}
  <img
    src="/front-end-developer-logo-2.png"
    alt="Vanita G Logo"
    className="w-9 h-9 rounded-full"
  />

  {/* NAME */}
  <span id="home">
    Vanita G<span className="text-violet-500"></span>
  </span>
</button>


          <nav className="hidden md:flex gap-8 text-lg text-[#C7C3D6]">
            <button onClick={() => setActiveSection("about")}>About Me</button>
            <button onClick={() => setActiveSection("experience")}>Experience</button>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
            <button onClick={() => setActiveSection("projects")}>Projects</button>
            <button onClick={() => setActiveSection("contact")}>Contact</button>
          </nav>

          <a
            href="/Vanita-G-FrontendDeveloper 2 1.pdf"
            download
            className="px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition"
          >
            Resume
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
