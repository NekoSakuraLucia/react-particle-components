export const getParticleOptions = (type) => {
    switch (type) {
        case "bubbles":
            return {
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.3,
                    },
                    size: {
                        value: { min: 10, max: 20 },
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
            }
        case "circle":
        default:
            return {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.5,
                        width: 1,
                    },
                },
            };
    }
};