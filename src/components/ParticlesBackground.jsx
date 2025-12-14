// src/components/ParticlesBackground.jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ParticlesBackground = () => {
  const { theme } = useContext(ThemeContext);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
  number: { value: 50 },
  color: { value: "#8B5CF6" },
  opacity: { value: 0.25 },
  size: { value: 2 },
  move: { speed: 0.6 },
  links: {
    enable: true,
    color: "#8B5CF6",
    opacity: 0.15,
    distance: 140,
  },
}

      }}
    />
  );
};

export default ParticlesBackground;
