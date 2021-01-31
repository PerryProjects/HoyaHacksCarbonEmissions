import React from "react";
import { TextField, Select, MenuItem, FormControl, FormHelperText, Button  } from '@material-ui/core';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PowerRoundedIcon from '@material-ui/icons/PowerRounded';
import FlightTakeoffRoundedIcon from '@material-ui/icons/FlightTakeoffRounded';
import TrainRoundedIcon from '@material-ui/icons/TrainRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';


const formState = {
    name: '',
    time: '',
    user_type: '',
    heat_type: '',
    heat: '',
    vehicle_type: '',
    electricity: '',
    air : '',
    rail: '',
    vehicle: '',
    lattitude: '',
    longitude: '',
}

const gasOptions = [
{key: "NGS", text: "Natural Gas",value: "NGS"},
{key: "OIL",text: "Oil",value: "OIL"},
{key: "OTH",text: "Other",value: "OTH"},
];

const vehicleOptions = [
{key: "D", text: "Diesel",value: "D"},
{key: "G",text: "Gas",value: "G"}
];

const companyOptions = [
{key: "R", text: "Residential",value: "R"},
{key: "C",text: "Commercial",value: "C"},
];

const PaperStyle = {
    background: "#4CC9F0",
    borderRadius: "1em",
    padding: ".2em",
    opacity: ".85",
    width: "50%",
    fontSize: "300%",
    fontWeight: "bold",
    margin: "auto"
}

const InputStyle = {
    width: "90%",
};

class EmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state=formState;
    }

    getLocation(position){
        const obj = formState;
        obj['longitude'] = position.coords.longitude;
        obj['lattitude'] = position.coords.latitude;
    }

    async postData(url = '', data = {}){
        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data,
            })
        return response.json();
    }

    handleSubmit(event) {
        var obj = this.state;
        console.log(obj);
        var d = new Date();
        var n = d.getTime();
        obj['time'] = n;
        obj = JSON.stringify(obj);
        console.log(obj);
        const url = 'http://localhost:8000/emissions/';
        this.postData(url, obj)
        .then(data => {
            //TODO: Route them to the emissions page
            console.log(data);
        }
        )
    }

    handleSelectChange(event, key){
        const UpdateKey = key;
        var obj = this.state;
        obj[UpdateKey] = event.target.value;
        this.setState(obj);
    };


    componentDidMount(){
        const result = navigator.geolocation.getCurrentPosition(this.getLocation);
    }

    render(){
        return (
            <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <TextField 
            style = {InputStyle}
            required
            id="standard-required"
            label="Name"
            placeholder="Please Enter your name..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleRoundedIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => this.handleSelectChange(e, "name")}
            />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <FormControl>
            <Select
            value={this.state.user_type}
            onChange={(e) => this.handleSelectChange(e, "user_type")}
            autoWidth
            >
            {
                companyOptions.map((option) =>
                 <MenuItem name={'user_type'} value={option.value}>{option.text}</MenuItem>
                 )
            }
            </Select>
            <FormHelperText style={{margin: "auto"}}>Are you filling this information for yourself or a Company?</FormHelperText>
            </FormControl>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <FormControl>
            <Select
            value={this.state.heat_type}
            onChange={(e) => this.handleSelectChange(e, "heat_type")}
            autoWidth
            >
            {
                gasOptions.map((option) =>
                 <MenuItem value={option.value}>{option.text}</MenuItem>
                 )
            }
            </Select>
            <FormHelperText style={{margin: "auto"}}>What is your primary fuel type?</FormHelperText>
            </FormControl>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <FormControl>
            <Select
            value={this.state.vehicle_type}
            onChange={(e) => this.handleSelectChange(e, "vehicle_type")}
            autoWidth
            >
            {
                vehicleOptions.map((option) =>
                 <MenuItem value={option.value}>{option.text}</MenuItem>
                 )
            }
            </Select>
            <FormHelperText style={{margin: "auto"}}>Do you primarily use 
            Deasel or Gas?</FormHelperText>
            </FormControl>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <TextField
            style = {InputStyle}
            required
            id="standard-required"
            label="Electricity (in KWH)"
            placeholder="Please Provide Amount of Electricity used in KWH" 
            onChange={(e) => this.handleSelectChange(e, "electricity")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PowerRoundedIcon />
                </InputAdornment>
              ),
            }}
            />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <TextField
            style = {InputStyle}
            required
            id="standard-required"
            label="Heat (in Cubic/Ft)"
            placeholder="Please Provide Amount of Heat Consumed"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WhatshotRoundedIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => this.handleSelectChange(e, "heat")}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <TextField
            style = {InputStyle}
            required
            id="standard-required"
            label="Air Travel (Miles/Year)"
            placeholder="Please Provide Amount of Miles Traveled" 
            onChange={(e) => this.handleSelectChange(e, "air")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffRoundedIcon/>
                </InputAdornment>
              ),
            }}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <TextField
            style = {InputStyle}
            required
            id="standard-required"
            label="Vehicle Travel (Miles/Year)"
            placeholder="Please Provide Amount of Miles Traveled" 
            onChange={(e) => this.handleSelectChange(e, "vehicle")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalShippingRoundedIcon />
                </InputAdornment>
              ),
            }}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={PaperStyle}>
            <TextField
            style = {InputStyle}
            required
            id="standard-required"
            label="Rail Travel (Miles/Year)"
            placeholder="Please Provide Amount of Miles Traveled" 
            onChange={(e) => this.handleSelectChange(e, "rail")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TrainRoundedIcon />
                </InputAdornment>
              ),
            }}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#7c5e42",
                    color: "#ffffff",
                    width: "20%"
                    }}
                size="large"
                startIcon={<ArrowForwardRoundedIcon />}
            onClick={(e) => this.handleSubmit(e)}>
            Submit
            </Button>
            </div>
            )
    }
}

export default EmissionForm;