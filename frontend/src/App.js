import './App.css';
import React from 'react';
import { Header } from 'semantic-ui-react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import BannerPic from './assets/allotropy.png';
import plane from './assets/airplane.png';
import tree from './assets/tree.png';
import sprout from './assets/sprout.png';
import moon from './assets/moon.png';
import star from './assets/star.png';


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  return (
    <div className="App">
       <Parallax pages={3} scrolling={true} vertical ref={ref => (React.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.4} factor={1.5} style={{ backgroundColor: '#253237', backgroundSize: 'cover' }}>
          <img src={BannerPic} style = {{width: '20%', marginTop: '-5%', marginLeft: '85%'}} />
          <h1 style={{color:'#ffffff', marginRight: '65%', marginTop: '-9%', fontSize: '80px' }}>Calculate Carbon</h1>
          <h1 style={{color:'#ffffff', marginRight: '76%', fontSize: '80px' }}>Emission</h1>
          <img src={moon} style={{ width: '5%', marginRight: '-55%', marginTop: '-10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.6} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '3%', marginLeft: '-60%', marginTop: '25%', transform: 'scaleX(-1)' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={0.8} style={{ opacity: 1 }}>
          <img src={star} style={{ display: 'block', width: '1%', marginLeft: '10%', marginTop: '20%' }} />
          <img src={star} style={{ display: 'block', width: '1%', marginLeft: '20%', marginTop: '20%' }} />
          <img src={star} style={{ display: 'block', width: '2%', marginLeft: '50%', marginTop: '-25%' }} />
          <img src={star} style={{ display: 'block', width: '1%', marginLeft: '70%', marginTop: '-15%' }} />
          <img src={star} style={{ display: 'block', width: '3%', marginLeft: '80%', marginTop: '25%' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.1} factor={1.5} style={{ backgroundImage: 'linear-gradient(180deg, #253237 0%, #4CC9F0 100%)' }} />

        <ParallaxLayer offset={1.1} speed={0.8} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '50%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%', marginTop: '-5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '35%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', marginTop: '-5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '50%', }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '10%', marginTop: '-5%'}} />

        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} factor={3} style={{ backgroundColor: '#2D6A4F' }} />
        <ParallaxLayer offset={2.3} speed={0.1} factor={1} style={{ background: 'linear-gradient(180deg, #2D6A4F 0%, #7c5e42 50%)' }} />
        
        <ParallaxLayer offset={1.7} speed={0.3} style={{ opacity: 1 }}>
          <img src={tree} style={{ display: 'block', width: '18%', height: '54%', marginLeft: '20%', marginTop: '3%'}}/>
          <img src={tree} style={{ display: 'block', width: '21%', height: '60%', marginLeft: '-2%', marginTop: '-28%' }}/>
          <img src={tree} style={{ display: 'block', width: '22%', height: '65%', marginLeft: '50%', marginTop: '-30%'}}/>
          <img src={tree} style={{ display: 'block', width: '17%', height: '52%', marginLeft: '80%', marginTop: '-33%'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={0.3} style={{ opacity: 1 }}>
          <img src={sprout} style={{ display: 'block', width: '5%',  marginLeft: '40%', marginTop: '30%'}}/>
          <img src={sprout} style={{ display: 'block', width: '3%',  marginLeft: '70%', marginTop: '-5%'}}/>
        </ParallaxLayer>


        <ParallaxLayer offset={0.8} speed={0.5} style={{}}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.6} style={{ opacity: 1 }}>
          <img src={plane} style={{ display: 'block', width: '10%', marginLeft: '55%', marginTop: '10%' }} />
        </ParallaxLayer>
        

        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Parallax>
    </div>
  );
}

export default App;
