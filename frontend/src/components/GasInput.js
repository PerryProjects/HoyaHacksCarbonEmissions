import React, { Component } from "react";
import { Grid, Image, Dropdown, Input, Segment, Menu } from "semantic-ui-react";
import gasIcon from "../assets/gas.png";
import "./css/dropdown.css";

const gasOptions = [
  {
    key: "Gas",
    text: "Gas",
    value: "Gas"
  },
  {
    key: "Diesel",
    text: "Diesel",
    value: "Diesel"
  }
];

const divStyle = {
  backgroundColor: "#4CC9F0",
  fontColor: "#081C15",
  width: "45%",
  padding: "7% 10px 20px 10px"
};

const background = {
  backgroundColor: "#4CC9F0",
  margin: "0% 20% 0% 20%",
  padding: "0",
  borderRadius: "20% 20% 20% 20%",
  width: "50%"
};

const img = {
  float: "left"
};

class GasInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      gallon: this.props.gallon,
    };
  }

  handleGallonChange = (event) => {
    this.setState({
      gallon: event.target.value
    });
  };

  render() {
    return (
      <form>
        <Menu compact style={background}>
          <Menu.Item>
            <Image src={gasIcon} size="mini" style={img} />
          </Menu.Item>
          <Dropdown
            inline
            style={divStyle}
            placeholder="Type of Gas"
            fluid
            button
            options={gasOptions}
          ></Dropdown>
          <Menu.Item style={{ padding: "0% 0% 0% 0%" }}>
            <input
              style={{
                width: "100%",
                height: "100%",
                padding: "0",
                margin: "0",
                backgroundColor: "#4CC9F0"
              }}
              placeholder="Gallon of Gas Per Year..."
              type="text"
              value={this.state.gallon}
              onChange={this.handleGallonChange}
            />
          </Menu.Item>
        </Menu>
      </form>
    );
  }
}

export default GasInput;
