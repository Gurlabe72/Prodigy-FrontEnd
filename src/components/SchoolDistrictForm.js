import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import {
  Grid,
  Image,
  Button,
  Form,
  Segment,
  Responsive,
  Menu,
  Container,
  Visibility,
  TextArea,
  Checkbox
} from "semantic-ui-react";
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
                    <Menu.Item as="a" active>
                      Home{" "}
                    </Menu.Item>{" "}
                    <Menu.Item as="a"> Our Programs </Menu.Item>{" "}
                    <Menu.Item position="right">
                      <Button as="a" inverted={!fixed}>
                        School Districts{" "}
                      </Button>{" "}
                    </Menu.Item>{" "}
                  </Container>{" "}
                </Menu>{" "}
              </Segment>{" "}
            </Visibility>{" "}
            {children}{" "}
          </Responsive>{" "}
          <div inverted>
            <Form
              veritcal
              size="huge"
              style={{
                padding: "1em"
              }}
            >
              <Form.Field>
                <h1> School District Name </h1>{" "}
                <input placeholder="Enter your name" />
              </Form.Field>{" "}
              <Form.Field>
                <h1> Email of Contact </h1>{" "}
                <input placeholder="Email@email.com" />
              </Form.Field>{" "}
              <Form.Field>
                <h1> Phone Number </h1> <input placeholder="(---)---_----" />
              </Form.Field>{" "}
              <h1> Message </h1>{" "}
              <Form.TextArea placeholder="How May We Assit you?" />
              <Button type="submit"> Send </Button>{" "}
            </Form>{" "}
          </div>
        </Fragment>{" "}
      </div>
    );
  }
}

export default ReferralForm;
