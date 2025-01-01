import { FC } from 'react';

type ParticleType = {
    id?: string;
    speed?: number;
    value?: number;
    opacity?: number;
    distance?: number;
    area?: number;
    color?: string;
    type?: 'circle' | 'bubbles';
}

declare const ParticleComponent: FC<ParticleType>;

export { ParticleComponent as default };
