type ParticleType = {
    id?: string;
    type?: "circle" | "bubbles";
}

declare module "react-particle-components" {
    import { FC } from "react";

    const ParticleComponent: FC<ParticleType>;

    export default ParticleComponent;
}