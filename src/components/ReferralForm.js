import React, { Component, Fragment } from "react";
import {
  Grid,
  Header,
  Button,
  Form,
  Segment,
  Responsive,
  Menu,
  Container,
  Visibility,
  Image
} from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Footer";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class ReferralForm extends Component {
  state = {};

  hideFixedMenu = () =>
    this.setState({
      fixed: false
    });
  showFixedMenu = () =>
    this.setState({
      fixed: true
    });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <div
        className={{
          flex: 1
        }}
      >
        <Fragment>
          <Responsive
            getWidth={getWidth}
            minWidth={Responsive.onlyTablet.minWidth}
          >
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
            >
              <Segment
                inverted
                textAlign="center"
                vertical
                style={{
                  minHeight: 50,
                  padding: "1em 0em"
                }}
              >
                <Menu
                  fixed={fixed ? "top" : null}
                  inverted={!fixed}
                  pointing={!fixed}
                  secondary={!fixed}
                  size="large"
                >
                  <Container>
                    <Link as="a" to="/" inverted={!fixed}>
                      <Menu.Item as="a" active>
                        Home{" "}
                      </Menu.Item>{" "}
                    </Link>{" "}
                    <Menu.Item position="right">
                      <Link to="/SchoolDistrictForm">
                        <Button as="a" inverted={!fixed}>
                          School Districts{" "}
                        </Button>{" "}
                      </Link>{" "}
                    </Menu.Item>{" "}
                  </Container>{" "}
                </Menu>{" "}
              </Segment>{" "}
            </Visibility>{" "}
            {children}{" "}
          </Responsive>{" "}
          <Form
            veritcal
            size="huge"
            style={{
              padding: "1em"
            }}
          >
            <Image centered src="http://i67.tinypic.com/2dkjuaa.png" />
            <h1 style={{ textAlign: "center" }}>
              {" "}
              Let Prodigy Healthcare reach out to you{" "}
            </h1>{" "}
            <p style={{ textAlign: "center" }}>
              {" "}
              Please include your information{" "}
            </p>{" "}
            <p style={{ textAlign: "center" }}>
              {" "}
              Prodigy will reach out to you upon request.{" "}
            </p>{" "}
            <Form.Field>
              <h1> Name </h1> <input placeholder="Enter your name" />
            </Form.Field>{" "}
            <Form.Field>
              <h1> Email </h1> <input placeholder="Email@email.com" />
            </Form.Field>{" "}
            <Form.Field>
              <h1> Phone Number </h1> <input placeholder="(---)---_----" />
            </Form.Field>{" "}
            <h1> Message </h1>{" "}
            <Form.TextArea placeholder="How May We Assit you?" />
            <Button type="submit"> Send </Button>{" "}
          </Form>{" "}
        </Fragment>{" "}
        <Footer />
      </div>
    );
  }
}

export default ReferralForm;
