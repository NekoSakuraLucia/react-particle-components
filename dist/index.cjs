var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);

// src/ParticleComponent.jsx
var import_react = __toESM(require("react"), 1);
var import_react2 = __toESM(require("@tsparticles/react"), 1);
var import_slim = require("@tsparticles/slim");

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
  if (!import_react.default || !import_react.useState || !import_react.useEffect) {
    console.error("React hooks are not available.");
    return null;
  }
  if (!import_react.default | !import_react.default.createElement) {
    console.error("React is not properly initialized.");
    return null;
  }
  if (!import_react2.default || !import_react2.initParticlesEngine) {
    console.error("tsParticles is not properly initialized. Ensure @tsparticles/react is installed and imported.");
    return null;
  }
  if (typeof speed !== "number" || speed <= 0) {
    console.error("Invalid speed value. It must be a positive number.");
    return null;
  }
  if (typeof value !== "number" || value <= 0) {
    console.error("Invalid value for particle count. It must be a positive number.");
    return null;
  }
  const [init, setInit] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (0, import_react2.initParticlesEngine)(async (engine) => {
      await (0, import_slim.loadSlim)(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (0, import_react.useCallback)((container) => {
    console.log("Particles Loaded:", container);
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, init && /* @__PURE__ */ import_react.default.createElement(
    import_react2.default,
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
//# sourceMappingURL=index.cjs.map