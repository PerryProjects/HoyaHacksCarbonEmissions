import React from "react";
import { TextField, Select, MenuItem, FormControl, FormHelperText, Button  } from '@material-ui/core';
import axios from 'axios';

const user_longitude='';
const user_latitude='';

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
    latitude: '',
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
    background: "#47afb3",
    width: "30%",
    fontSize: "300%",
    margin: "auto"
}

const InputStyle = {
    width: "60%",
};

class EmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state=formState;
    }

    getLocation(position){
        const obj = formState;
        obj['longitude'] = position.coords.latitude;
        obj['latitude'] = position.coords.longitude;
    }

    handleSubmit(event) {
        var obj = this.state;
        var d = new Date();
        var n = d.getTime();
        obj['time'] = n;
        obj = JSON.stringify(obj);
        axios.post('localhost:8000/emissions/', { obj })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
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
           <div style={PaperStyle}>
            <TextField 
                style = {InputStyle}
                required
                id="standard-required"
                label="Name"
                placeholder="Please Enter your name..."
                onChange={(e) => this.handleSelectChange(e, "name")}
                />
           </div>
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
            <div style={PaperStyle}>
                <TextField
                    style = {InputStyle}
                    required
                    id="standard-required"
                    label="Heat (in Cubic/Ft)"
                    placeholder="Please Provide Amount of Heat Consumed" 
                    onChange={(e) => this.handleSelectChange(e, "heat")}/>
            </div>
            <div style={PaperStyle}>
                <TextField
                    style = {InputStyle}
                    required
                    id="standard-required"
                    label="Electricity (in KWH)"
                    placeholder="Please Provide Amount of Electricity used in KWH" 
                    onChange={(e) => this.handleSelectChange(e, "electricity")}/>
            </div>
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
            <div style={PaperStyle}>
                <TextField
                    style = {InputStyle}
                    required
                    id="standard-required"
                    label="Air Travel (Miles/Year)"
                    placeholder="Please Provide Amount of Heat Consumed" 
                    onChange={(e) => this.handleSelectChange(e, "air")}/>
            </div>
            <div style={PaperStyle}>
                <TextField
                    style = {InputStyle}
                    required
                    id="standard-required"
                    label="Rail Travel (Miles/Year)"
                    placeholder="Please Provide Amount of Heat Consumed" 
                    onChange={(e) => this.handleSelectChange(e, "rail")}/>
            </div>
            <Button 
                size="large"
                onClick={(e) => this.handleSubmit(e)}>
              Submit
            </Button>
        </div>
        )
    }
}

export default EmissionForm;