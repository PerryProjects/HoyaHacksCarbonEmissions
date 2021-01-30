import logo from './logo.svg';
import BannerPic from './assets/allotropy.png'
import './App.css';
import React from 'react';
import { Header } from 'semantic-ui-react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  return (
    <div className="App">
      <Parallax pages={3} scrolling={true} vertical ref={ref => (React.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.5} factor={1.5} style={{ backgroundColor: '#1545C0', backgroundSize: 'cover' }}>
        <img src={BannerPic} style = {{width: '20%', marginTop: '-5%', marginLeft: '85%'}} />
         <h1 style={{color:'#ffffff', marginRight: '65%', marginTop: '-9%', fontSize: '3.5em' }}>Calculate Carbon</h1>
         <h1 style={{color:'#ffffff', marginRight: '76%', fontSize: '3.5em' }}>Emission</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1} factor={1.5} style={{ backgroundColor: '#1545C0' }} />
        <ParallaxLayer offset={2} speed={0.1} factor={3} style={{ backgroundColor: '#1545C0' }} />

        <ParallaxLayer offset={1} speed={0.5} style={{}}>
        <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Parallax>
    </div>
  );
}

export default App;
