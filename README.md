# react-particle-components
A set of components for ts-praticles React that allows you to easily add beautiful particle effects. Just import and use, no complicated setup or coding required. Great for adding visual interest to your UI.

## Installation
You can install this package via npm:
```base
npm install react-particle-components
```

## Exmaple Usage
```jsx
import NekoParticle from "react-particle-components"

function App() {
  return (
    <NekoParticle id="Neko-Particle" type="circle" color="#f472b6" value={100} />
  )
}

export default App
```

#### With just this, you can use particles without having to configure them manually. You can adjust the type of particle by setting the type to either circle or bubbles, along with several other properties to define the number or speed of the particles.