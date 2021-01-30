import React from "react";
import { Grid, Image, Segment, Container } from "semantic-ui-react";
import Font, { Text } from "react-font";

const titleStyle = {
  color: "#ffffff",
  fontSize: 34,
  textAlign: "center",
  fontWeight: "bold",
  paddingTop: "10px"
};

const background = {
  backgroundColor: "#4895EF",
  borderRadius: "10% 10% 50% 50%"
};

const resultStyle = {
  fontSize: 25,
  color: "#ffffff",
  fontWeight: "bold",
  paddingTop: "15px",
  textAlign: "center"
};

class resultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 345622
    };
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Segment style={background}>
              <Font family="Gorditas">
                <div style={titleStyle}>Carbon</div>
                <div style={titleStyle}>Footprint</div>
              </Font>
              <br />
              <br />
              <br />
              <Font family="Noticia Text">
                <div style={resultStyle}>{this.state.value}</div>
                <div style={resultStyle}> Per Year </div>
              </Font>
              <br />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default resultComponent;