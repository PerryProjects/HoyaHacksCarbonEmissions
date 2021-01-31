import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import {HeatmapLayer} from '@deck.gl/aggregation-layers';
import axios from "react";
import {MapView, FirstPersonView} from '@deck.gl/core';
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibHVrZXBlcnJ5NDciLCJhIjoiY2tra2E5bXdkMThiNjMxb2R3ZXd2MjVzeiJ9.ANk2BfLUiL-fBvB7zbm5hA";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -98.5795,
  latitude: 39.8283,
  zoom: 3,
  pitch: 30,
  bearing: 45
};

const data = [];


class DataViz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
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
    render () {
        const layers = [new HeatmapLayer({
            id: 'heatmapLayer',
            data,
            // intensity: .8,
            radiusPixels: 70,
            getPosition: d => d.COORDINATES,
            getWeight: d => d.WEIGHT,    
          })];
        return(<DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
          >
            {/* <MapView id="map" height="50%" width="50%" controller={true}> */}
            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            {/* </MapView> */}
          </DeckGL>
          );
    }


}

export default DataViz;