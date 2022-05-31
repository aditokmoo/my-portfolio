import { Canvas } from '@react-three/fiber'
import Header from './components/Header'
import Nav from './components/Nav'
import Stars from './components/Stars';
import './App.css';

function App() {
  return (
      <div className='App'>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
        <Header />
        <Nav />
      </div>
  );
}

export default App;
