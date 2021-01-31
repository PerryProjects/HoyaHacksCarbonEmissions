import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import {HeatmapLayer} from '@deck.gl/aggregation-layers';
import axios from "react";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibHVrZXBlcnJ5NDciLCJhIjoiY2tra2E5bXdkMThiNjMxb2R3ZXd2MjVzeiJ9.ANk2BfLUiL-fBvB7zbm5hA";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -98.5795,
  latitude: 39.8283,
  zoom: 1,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
// const data = [
//   {
//     sourcePosition: [-122.41669, 37.7853],
//     targetPosition: [-122.41669, 37.781]
//   }
// ];
// new LineLayer({ id: "line-layer", data })

const data = [
  // {
  //     COORDINATES: [-77.0369, 38.9072], WEIGHT: .05
  // },
  // {
  //     COORDINATES: [-122.42177834, 37.78346622], WEIGHT: .5
  // },

];


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
            getPosition: d => d.COORDINATES,
            getWeight: d => d.WEIGHT,    
          })];
        return(<DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
          >
            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
          </DeckGL>);
    }


}

export default DataViz;