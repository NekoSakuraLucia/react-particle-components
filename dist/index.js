// src/ParticleComponent.jsx
import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// options/getParticleOptions.js
var getParticleOptions = (type, speed, value, opacity, distance, area, color) => {
  switch (type) {
    case "bubbles":
      return {
        particles: {
          number: {
            value,
            density: {
              enable: true,
              area
            }
          },
          opacity: {
            value: opacity
          },
          size: {
            value: { min: 1, max: 5 }
          },
          color: {
            value: color
          },
          shape: {
            type: "circle"
          },
          move: {
            enable: true,
            speed,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        }
      };
    case "circle":
    default:
      return {
        particles: {
          number: {
            value,
            density: {
              enable: true,
              area
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: opacity
          },
          size: {
            value: { min: 1, max: 5 }
          },
          move: {
            enable: true,
            speed,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          links: {
            enable: true,
            distance,
            color,
            opacity,
            width: 1
          }
        }
      };
  }
};

// src/ParticleComponent.jsx
var ParticleComponent = ({
  id = "neko-tsparticles",
  type = "circle",
  speed = 2,
  value = 80,
  opacity = 0.5,
  distance = 150,
  area = 800,
  color = "#ffffff"
}) => {
  if (!React || !useState || !useEffect) {
    console.error("React hooks are not available.");
    return null;
  }
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = useCallback((container) => {
    console.log("Particles Loaded:", container);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, init && /* @__PURE__ */ React.createElement(
    Particles,
    {
      id,
      particlesLoaded,
      options: {
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.2
            }
          }
        },
        ...getParticleOptions(type, speed, value, opacity, distance, area, color),
        detectRetina: true
      }
    }
  ));
};
var ParticleComponent_default = ParticleComponent;

// index.js
var index_default = ParticleComponent_default;
export {
  index_default as default
};
//# sourceMappingURL=index.js.map