import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section
    id="contact"
    className="text-center bg-[#110720] text-white"
  >
    <h2 className="text-4xl font-semibold mb-6">Let’s work together</h2>

    <p className="text-[#C7C3D6] max-w-xl mx-auto">
      Open to full-time roles, collaborations, or freelance projects.
    </p>
 {/* Growth / mindset (animated highlight) */}
   <p className="text-white/90 animate-softBlink mb-14">
  Continuously improving and exploring modern frontend technologies.
</p>

    {/* Contact Info */}
    <div className="flex flex-col items-center gap-6 text-lg">
      
      <a
        href="mailto:vanita21092000@gmail.com"
        className="flex items-center gap-4 hover:text-violet-400 transition"
      >
        <FaEnvelope className="text-violet-500" />
        vanita21092000@gmail.com
      </a>

      <a
        href="tel:+919113939054"
        className="flex items-center gap-4 hover:text-violet-400 transition"
      >
        <FaPhoneAlt className="text-violet-500" />
        +91 91139 39054
      </a>

      <div className="flex items-center gap-4 text-[#C7C3D6]">
        <FaMapMarkerAlt className="text-violet-500" />
        Bangalore, India
      </div>
    </div>

    {/* Social Links */}
    <div className="mt-14 flex justify-center gap-6">
      <a
        href="linkedin.com/in/vanita-gatigennavar-7138a3200"
        target="_blank"
        rel="noreferrer"
        className="p-4 rounded-full bg-[#160A2E]
        hover:bg-violet-600 transition shadow-lg shadow-violet-500/20"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/Vanitagatigennavar"
        target="_blank"
        rel="noreferrer"
        className="p-4 rounded-full bg-[#160A2E]
        hover:bg-violet-600 transition shadow-lg shadow-violet-500/20"
      >
        <FaGithub />
      </a>
    </div>

    {/* Footer */}
    <p className="mt-8 text-sm text-[#C7C3D6]">
      © {new Date().getFullYear()} Vanita Gatigennavar. All rights reserved.
    </p>
  </section>
);

export default Contact;
