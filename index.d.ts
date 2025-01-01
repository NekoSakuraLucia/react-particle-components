type ParticleType = {
    id?: string;
    speed?: number;
    value?: number;
    opacity?: number;
    distance?: number;
    area?: number
    type?: "circle" | "bubbles";
}

declare module "react-particle-components" {
    import { FC } from "react";

    const ParticleComponent: FC<ParticleType>;

    export default ParticleComponent;
}