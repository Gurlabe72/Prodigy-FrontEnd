import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Icon,
  Segment,
  Accordion,
  Grid,
  List,
  Header
} from "semantic-ui-react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

export default class Footer extends Component {
  render() {
    return (
      <Router>
        <Segment
          inverted
          vertical
          style={{
            padding: "5em 0em"
          }}
        >
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <Link to="/">
                      <List.Item as="a"> Home </List.Item>{" "}
                    </Link>{" "}
                    <br />
                    <Link to="/SchoolDistrictForm">
                      <List.Item as="a"> School Districts </List.Item>{" "}
                    </Link>{" "}
                    <br />
                    <Link to="/ReferralForm">
                      <List.Item as="a"> Contact Us </List.Item>{" "}
                    </Link>{" "}
                    <br />
                    <Link to="/CareersForm">
                      <List.Item as="a"> Careers </List.Item>{" "}
                    </Link>{" "}
                    <br />
                    <List.Item as="a"> FAQ </List.Item>{" "}
                  </List>{" "}
                </Grid.Column>{" "}
                <Grid.Column width={7}>
                  <Header inverted as="h4" content="Services" />
                  <Header as="h4" inverted>
                    info @prodigy - hc.com{" "}
                  </Header>{" "}
                  <p> (559) 892 - 9452 </p>{" "}
                  <Header as="h4" dimmed>
                    {" "}
                    © 2019 Prodigy Healthcare Inc.All Rights Reserved.{" "}
                  </Header>{" "}
                </Grid.Column>{" "}
              </Grid.Row>{" "}
            </Grid>{" "}
          </Container>{" "}
        </Segment>{" "}
      </Router>
    );
  }
}
