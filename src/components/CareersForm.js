import React, { Component, Fragment } from "react";
import {
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

class CareersForm extends Component {
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
                      <Button as="a" inverted={!fixed}>
                        School Districts{" "}
                      </Button>{" "}
                    </Menu.Item>{" "}
                  </Container>{" "}
                </Menu>{" "}
                {children}{" "}
              </Segment>{" "}
            </Visibility>{" "}
          </Responsive>{" "}
          <Form
            veritcal
            size="huge"
            style={{
              padding: "1em"
            }}
          >
            <Image centered src="http://i67.tinypic.com/2dkjuaa.png" />
            <h1 style={{ textAlign: "center" }}> Careers </h1>{" "}
            <p style={{ textAlign: "center" }}> Please send us your resume! </p>{" "}
            <p style={{ textAlign: "center" }}>
              Prodigy Healthcare would love to know why you are a good fit.{" "}
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
            <Form.Field>
              <h1> Resume / CV </h1> <Button type="attached"> Resume </Button>{" "}
            </Form.Field>{" "}
            <h1> Cover Letter </h1>{" "}
            <Form.TextArea placeholder="Include a cover letter for our Hiring Team!" />
            <Button type="submit"> Send </Button>{" "}
          </Form>{" "}
        </Fragment>{" "}
        <Footer />
      </div>
    );
  }
}

export default CareersForm;
