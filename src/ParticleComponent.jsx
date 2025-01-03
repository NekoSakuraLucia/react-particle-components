import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { getParticleOptions } from "../options/getParticleOptions";

const ParticleComponent = (
    {
        id = "neko-tsparticles",
        type = "circle",
        speed = 2,
        value = 80,
        opacity = 0.5,
        distance = 150,
        area = 800,
        color = "#ffffff"
    }
) => {
    if (!React || !useState || !useEffect) {
        console.error("React hooks are not available.");
        return null;
    }

    if (!React | !React.createElement) {
        console.error("React is not properly initialized.");
        return null;
    }

    if (!Particles || !initParticlesEngine) {
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

    return (
        <>
            {init && (
                <Particles
                    id={id}
                    particlesLoaded={particlesLoaded}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.2,
                                },
                            },
                        },
                        ...getParticleOptions(type, speed, value, opacity, distance, area, color),
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default ParticleComponent;