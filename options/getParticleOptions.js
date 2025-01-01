export const getParticleOptions = (type, speed, value, opacity, distance, area) => {
    switch (type) {
        case "bubbles":
            return {
                particles: {
                    number: {
                        value: value,
                        density: {
                            enable: true,
                            area: area,
                        },
                    },
                    opacity: {
                        value: opacity,
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    move: {
                        enable: true,
                        speed: speed,
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
                        value: value,
                        density: {
                            enable: true,
                            area: area,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: opacity,
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    move: {
                        enable: true,
                        speed: speed,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    links: {
                        enable: true,
                        distance: distance,
                        color: "#ffffff",
                        opacity: opacity,
                        width: 1,
                    },
                },
            };
    }
};