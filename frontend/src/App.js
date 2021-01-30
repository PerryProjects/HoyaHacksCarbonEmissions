import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from 'semantic-ui-react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  return (
    <div className="App">
      <Parallax pages={3} scrolling={true} vertical ref={ref => (React.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0} factor={1.5} style={{ backgroundColor: '#1545C0', backgroundSize: 'cover' }}>

        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} factor={1.5} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={0} factor={3} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={1} speed={0.5} style={{}}>
        <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
