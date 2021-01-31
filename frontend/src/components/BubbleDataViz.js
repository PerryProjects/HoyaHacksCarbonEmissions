
import React from "react";
import { Button, Segment, Dropdown } from "semantic-ui-react";
import plant from '../assets/power-plant.png';
import cloud from '../assets/cloud.png';
import BubbleChart from 'react-apexcharts';
import './BubbleDataViz.css';
import { Link } from 'react-router-dom'

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
    marginTop: '7.1%',
    padding: "20px 10px 20px 10px"
};


function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    var xmax_unfit = 1050;
    var xmin_unfit = -50;
    var total = 0;
    while (i < count) {

        var x = Math.floor(Math.random() * (xmax_unfit - xmin_unfit)) + xmin_unfit;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 30) + yrange.min);
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

const data = []
var total_e = ''

class BubbleDataViz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total_all_emissions: '',
            options: {
                chart: {
                    type: 'bubble',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: true
                },
                fill: {
                    opacity: 0.8
                },
                xaxis: {
                    max: 1100,
                    min: -100,
                    tickAmount: 10,
                    type: 'category',
                    labels: {
                        show: false,
                        color: '#fff'
                    },
                    axisBorder: {
                        show: false,
                        color: '#fff'
                    },
                },
                yaxis: {
                    max: 100,
                    labels: {
                        show: true,
                        style: {
                            colors: '#fff'
                        }
                    },
                },
                grid: {
                    show: false
                },
                legend: {
                    show: false
                },

            },
            labels: {

            },
            series: [{
                name: 'Bubble1',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble2',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble3',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble4',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            }]
        }
    }



    componentDidMount() {
        fetch('http://localhost:8000/emissions/')
            .then(response => response.json())
            .then(content => {
                total_e = content.total_all_emissions
                content.list_emission_entries.map((entry) => {
                    const obj = {};
                    console.log(entry);
                    obj['NAME'] = entry.name;
                    obj['WEIGHT'] = entry.emissions_total;      //personal total
                    obj['TIME'] = entry.time;
                    obj['Y_PERC_TOTAL'] = (entry.emissions_total / content.total_all_emissions) * 100;
                    data.push(obj);
                })
            })
    }

    render() {

        return (
            <div className="DataViz" style={{ height: "100vh", background: "linear-gradient(black, #1545C0)", backgroundSize: 'cover', overflow: 'hidden', maxWidth: '100%' }}>
                <h1 style={{ marginLeft: "2%", position: "absolute", width: "30%", fontSize: 50, textAlign: "left", lineHeight: 2, color: "white" }}>
                    Your Carbon Footprint Compared to Others
                </h1>
                <div>
                    <img src={cloud} style={{ position: 'absolute', marginLeft: "90%", marginTop: "-5%", width: "15%" }} />
                    <img src={cloud} style={{ position: 'absolute', marginLeft: "70%", marginTop: "0%", width: "12%" }} />
                    <img src={cloud} style={{ position: 'absolute', marginLeft: "85%", marginTop: "8%", width: "10%" }} />

                </div>


                <BubbleChart options={this.state.options} series={this.state.series} type="bubble" height={"64%"} width={window.innerWidth} style={{ marginTop: '10%' }} />


                <Link to='/heatMap'>
                    <Button style={{position:"absolute", marginLeft: "30%", height: '70px', width: '25%', borderRadius: 20, backgroundColor:'white', marginTop: "2%" }}>Switch to Heat Map</Button>
                </Link>
                <Link to='/'>
                    <Button style={{position:"absolute", marginLeft: "60%", height: '70px', width: '25%', borderRadius: 20, marginTop: "2%"  }}>Exit</Button >
                </Link>


                    <img src={plant} style={{ position: 'absolute', marginTop: "-1.8%", width: "10%" }} />

            </div>
        );
    }
}

export default BubbleDataViz;