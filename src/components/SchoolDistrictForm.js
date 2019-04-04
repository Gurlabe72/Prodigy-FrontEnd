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
  TextArea
} from "semantic-ui-react";
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class SchoolDistrictForm extends Component {
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
          <Grid celled="internally">
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>{" "}
              <Grid.Column width={10}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="example@email.com"
                  />
                  <Form.Input
                    fluid
                    label="Phone number"
                    placeholder="(---) --- - ---"
                  />
                  <TextArea width={10} rows={2} placeholder="Tell us more" />{" "}
                </Form.Group>{" "}
              </Grid.Column>{" "}
              <Grid.Column width={3}>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>{" "}
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>{" "}
              <Grid.Column width={10}>
                <Button content="Submit" />
              </Grid.Column>{" "}
              <Grid.Column width={3}>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>{" "}
            </Grid.Row>{" "}
          </Grid>{" "}
        </Fragment>{" "}
      </div>
    );
  }
}

export default SchoolDistrictForm;
