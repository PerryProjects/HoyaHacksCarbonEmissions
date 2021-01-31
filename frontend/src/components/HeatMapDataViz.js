import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import {HeatmapLayer} from '@deck.gl/aggregation-layers';
import {  Button, Dropdown } from "semantic-ui-react";
import './BubbleDataViz.css';


import axios from "react";
import {MapView, FirstPersonView} from '@deck.gl/core';

import plant from '../assets/power-plant.png';
import cloud from '../assets/cloud.png';
import BarChart from 'react-apexcharts';

const chartOptions = [
  {
    key: "Bubble Chart",
    text: "Bubble Chart",
    value: "Bubble Chart"
  },
  {
    key: "Heatmap",
    text: "Heatmap",
    value: "Heatmap"
  }
];

const divStyle = {
  backgroundColor: "#fff",
  fontColor: "#081C15",
  width: "5%",
  marginLeft: '95%',
  marginTop: '2%',
  padding: "20px 10px 20px 10px"
};


const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibHVrZXBlcnJ5NDciLCJhIjoiY2tra2E5bXdkMThiNjMxb2R3ZXd2MjVzeiJ9.ANk2BfLUiL-fBvB7zbm5hA";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -98.5795,
  latitude: 39.8283,
  zoom: 3,
  pitch: 30,
  bearing: 20
};

const data = [];

class HeatMapDataViz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}        
    }

    componentDidMount() {
      fetch('http://localhost:8000/emissions/')
        .then(response => response.json())
        .then(content => content.list_emission_entries.map((entry) => {
          const obj = {};
          console.log(entry.normalized_emissions);
          obj['COORDINATES'] = [entry.longitude, entry.lattitude];
          obj['WEIGHT'] = entry.normalized_emissions;
          data.push(obj);
        }));
        console.log(data)
    };

    render() {
      const layers = [new HeatmapLayer({
        id: 'heatmapLayer',
        data,
        // intensity: .8,
        radiusPixels: 70,
        getPosition: d => d.COORDINATES,
        getWeight: d => d.WEIGHT,    
      })];
      
      return (
          <div className="DataViz" style={{height: "100vh", background: "linear-gradient(black, #1545C0)", backgroundSize: 'cover', overflow: 'hidden', maxWidth: '100%' }}>

              <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
              >
                {/* <MapView id="map" height="50%" width="50%" controller={true}> */}
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
                {/* </MapView> */}
              </DeckGL>

              <h1 style={{ marginLeft: "2%", position: "absolute", width: 600, fontSize: 50, textAlign: "left", lineHeight: 2, color: "#000" }}>
                  Your Carbon Footprint Compared to Others
              </h1>
              {/* <div>
                  <img src={cloud} style={{ position: 'absolute', marginLeft: "35%", marginTop: "-5%", width: "15%"  }} />
                  <img src={cloud} style={{ position: 'absolute', marginLeft: "15%", marginTop: "0%", width: "12%" }} />
                  <img src={cloud} style={{ position: 'absolute', marginLeft: "30%", marginTop: "8%", width: "10%" }} />

              </div> */}
          
                <Dropdown
                    inline
                    style={divStyle}
                    placeholder="View Data"
                    fluid
                    selection
                    options={chartOptions}
                ></Dropdown>

              <div>
                  <img src={plant} style={{ position: 'absolute', marginLeft: "-50%", marginTop: "38.5%", width: "10%" }} />
              </div>
          </div>
      );
    }
}

export default HeatMapDataViz;