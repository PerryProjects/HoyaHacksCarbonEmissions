import React from "react";
// import "./styles.css";
import plant from '../assets/power-plant.png';
import cloud from '../assets/cloud.png';
import BarChart from 'react-apexcharts';

class DataViz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
              chart: {
                id: 'apexchart-example'
              },
              xaxis: {
                categories: ['1/21', '1/25', '1/31', '2/1', '2/3', '2/4', '2/6', '2/9']
              }
            },
            series: [{
              name: 'series-1',
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
          }
    }

    render() {
        
        return (
            <div className="DataViz" style={{height: "100vh", background: "linear-gradient(black, #1545C0)", backgroundSize: 'cover', overflow: 'hidden', maxWidth: '100%' }}>
                <h1 style={{ marginLeft: "2%", position: "absolute", width: 600, fontSize: 50, textAlign: "left", lineHeight: 2, color: "white" }}>
                    Your Carbon Footprint Compared to Others
                </h1>
                <div>
                    <img src={cloud} style={{ position: 'absolute', marginLeft: "35%", marginTop: "-5%", width: "15%"  }} />
                    <img src={cloud} style={{ position: 'absolute', marginLeft: "15%", marginTop: "0%", width: "12%" }} />
                    <img src={cloud} style={{ position: 'absolute', marginLeft: "30%", marginTop: "8%", width: "10%" }} />

                </div>

             
                
                
                <BarChart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} style={{backgroundColor: '#fff', maxWidth: '510px', marginLeft: '30%', marginTop: '10%'}} /> 

                <div>
                    <img src={plant} style={{ position: 'absolute', marginLeft: "-50%", marginTop: "40.9%", width: "10%" }} />
                </div>
            </div>
        );
    }
}

export default DataViz;