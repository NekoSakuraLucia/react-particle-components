import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { getParticleOptions } from "../options/getParticleOptions";

const ParticleComponent = ({ id = "neko-tsparticles", type = "circle" }) => {
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
                        ...getParticleOptions(type),
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default ParticleComponent;