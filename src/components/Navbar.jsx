import { useState } from "react";

const Navbar = ({ setActiveSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-[#110720]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

          {/* LOGO */}
          <button
            onClick={() => {
              setActiveSection("home");
              setOpen(false);
            }}
            className="flex items-center gap-3 font-semibold text-lg hover:opacity-90 transition"
          >
            <img
              src="/front-end-developer-logo-2.png"
              alt="Vanita G Logo"
              className="w-9 h-9 rounded-full"
            />
            <span>Vanita G</span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-lg text-[#C7C3D6]">
            <button onClick={() => setActiveSection("about")}>About</button>
            <button onClick={() => setActiveSection("experience")}>Experience</button>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
            <button onClick={() => setActiveSection("projects")}>Projects</button>
            <button onClick={() => setActiveSection("contact")}>Contact</button>
          </nav>

          {/* DESKTOP RESUME */}
        <a
  href="/Vanita-G-FrontendDeveloper.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition"
>
  Resume
</a>


          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#110720] border-t border-white/10">
            <div className="flex flex-col px-6 py-4 gap-4 text-[#C7C3D6]">
              <button onClick={() => { setActiveSection("about"); setOpen(false); }}>About</button>
              <button onClick={() => { setActiveSection("experience"); setOpen(false); }}>Experience</button>
              <button onClick={() => { setActiveSection("skills"); setOpen(false); }}>Skills</button>
              <button onClick={() => { setActiveSection("projects"); setOpen(false); }}>Projects</button>
              <button onClick={() => { setActiveSection("contact"); setOpen(false); }}>Contact</button>

              <a
                href="/Vanita-G-FrontendDeveloper.pdf"
                download
                className="mt-2 px-6 py-2 text-center rounded-full bg-violet-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
