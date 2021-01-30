import './App.css';
import React from 'react';
import { Header } from 'semantic-ui-react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import BannerPic from './assets/allotropy.png';
import world from './assets/worldwide.png';
import plane from './assets/airplane.png';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  return (
    <div className="App">
       <Parallax pages={3} scrolling={true} vertical ref={ref => (React.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.5} factor={1.5} style={{ backgroundColor: '#1545C0', backgroundSize: 'cover' }}>
          <img src={BannerPic} style = {{width: '20%', marginTop: '-5%', marginLeft: '85%'}} />
          <h1 style={{color:'#ffffff', marginRight: '65%', marginTop: '-9%', fontSize: '80px' }}>Calculate Carbon</h1>
          <h1 style={{color:'#ffffff', marginRight: '76%', fontSize: '80px' }}>Emission</h1>
          <img src={world} style={{ width: '5%', marginRight: '55%', marginTop: '-11%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.5} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '3%', marginLeft: '-60%', marginTop: '15%', transform: 'scaleX(-1)' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={0.3} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '50%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%', marginTop: '-5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '35%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', marginTop: '-5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '10%', }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '70%', }} />
        </ParallaxLayer>



        <ParallaxLayer offset={1} speed={0.1} factor={1.5} style={{ backgroundColor: '#74C69D' }} />
        
        <ParallaxLayer offset={2} speed={0.1} factor={3} style={{ backgroundColor: '#2D6A4F' }} />



        <ParallaxLayer offset={0.8} speed={0.5} style={{}}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.8} style={{ opacity: 1 }}>
          <img src={plane} style={{ display: 'block', width: '10%', marginLeft: '55%', marginTop: '10%' }} />
        </ParallaxLayer>
        
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Parallax>
    </div>
  );
}

export default App;
