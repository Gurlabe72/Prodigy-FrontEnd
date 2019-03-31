import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image src="https://cdn.wallpapersafari.com/51/32/U1G9Ec.jpg" />
    <Header
      as="h1"
      content="Prodigy Healthcare Inc"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />{" "}
    <Header
      as="h2"
      content="To excel in comprehensive and integrated care and activities for youth and their families."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />{" "}
    <Button primary size="huge">
      Contact Us <Icon name="right arrow" />
    </Button>{" "}
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
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
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 1000,
              padding: "1em 0em"
            }}
            vertical
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
                    School Districts
                  </Button>{" "}
                </Menu.Item>{" "}
              </Container>{" "}
            </Menu>{" "}
            <HomepageHeading />
          </Segment>{" "}
        </Visibility>
        {children}{" "}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () =>
    this.setState({
      sidebarOpened: false
    });

  handleToggle = () =>
    this.setState({
      sidebarOpened: true
    });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a">Are you a School District? </Menu.Item>{" "}
          <Menu.Item as="a">Programs </Menu.Item>{" "}
          <Menu.Item as="a"> Contact Us </Menu.Item>{" "}
          <Menu.Item as="a"> Careers</Menu.Item>{" "}
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em"
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>{" "}
                <Menu.Item position="right">
                  <Button as="a">School Districts</Button>{" "}
                </Menu.Item>{" "}
              </Menu>{" "}
            </Container>{" "}
            <HomepageHeading mobile />
          </Segment>
          {children}{" "}
        </Sidebar.Pusher>{" "}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer> {children} </DesktopContainer>{" "}
    <MobileContainer> {children} </MobileContainer>{" "}
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment
      style={{
        padding: "8em 0em"
      }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Header
            as="h3"
            style={{
              fontSize: "2em"
            }}
          >
            Our Mission{" "}
          </Header>{" "}
          <p
            style={{
              fontSize: "1.33em"
            }}
          >
            Our mission is to provide comprehensive services to help young
            adults and their families achieve and maintain a healthy, productive
            lifestyle including substance abuse recovery, behavioral health
            services and after school programming. We guide young adults toward
            a life of excellence, leadership and service. Young adults are
            taught responsibility, accountability, life skills, social skills
            and work ethic, while receiving an equal blend of therapeutic and
            clinical services. Prodigy Healthcare, Inc. serves youth and their
            families through evidence-based programming designed to promote
            pro-social behavior and healthy lifestyles.{" "}
          </p>{" "}
        </Grid.Row>{" "}
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge"> Our Programs </Button>{" "}
          </Grid.Column>{" "}
        </Grid.Row>{" "}
      </Grid>{" "}
    </Segment>{" "}
    <Segment
      style={{
        padding: "0em"
      }}
      vertical
    >
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em"
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em"
              }}
            >
              A Message from our CEO{" "}
              <p
                style={{
                  fontSize: "1.33em"
                }}
              >
                <Image
                  avatar
                  src="data:image/jpeg;base64,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"
                />
                <b> JD </b> Chief Officer Badass{" "}
              </p>{" "}
            </Header>{" "}
          </Grid.Column>{" "}
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em"
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em"
              }}
            >
              "ENTER REALLY SICK QUOTE"{" "}
            </Header>{" "}
          </Grid.Column>{" "}
        </Grid.Row>{" "}
      </Grid>{" "}
    </Segment>{" "}
    <Segment
      style={{
        padding: "8em 0em"
      }}
      vertical
    >
      <Container text>
        <Header
          as="h3"
          style={{
            fontSize: "2em"
          }}
        >
          Our Counselors{" "}
        </Header>{" "}
        <p
          style={{
            fontSize: "1.33em"
          }}
        >
          Every single team member of Prodigy Healthcare Inc. is committed to
          providing the highest quality of counseling services available to all
          adolescents and their families. Prodigy Healthcare Inc. counselors are
          registered or certified with one of eight state approved accrediting
          agencies for substance abuse counseling certification.{" "}
        </p>{" "}
        <Button as="a" size="large">
          Join Our Team!{" "}
        </Button>{" "}
      </Container>{" "}
    </Segment>{" "}
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
                <List.Item as="a"> Back to the Top </List.Item>{" "}
                <List.Item as="a"> School Districts </List.Item>{" "}
                <List.Item as="a"> Our Programs </List.Item>{" "}
                <List.Item as="a"> Contact Us </List.Item>{" "}
                <List.Item as="a"> Careers </List.Item>{" "}
                <List.Item as="a"> FAQ </List.Item>{" "}
              </List>{" "}
            </Grid.Column>{" "}
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Services" />
              <Header as="h4" inverted>
                jd@prodigy-hc.com{" "}
              </Header>{" "}
              <p>(559) 892-9452 </p>{" "}
              <Header as="h4" dimmed>
                © 2019 Prodigy Healthcare Inc. All Rights Reserved.{" "}
              </Header>{" "}
            </Grid.Column>{" "}
          </Grid.Row>{" "}
        </Grid>{" "}
      </Container>{" "}
    </Segment>{" "}
  </ResponsiveContainer>
);
export default HomepageLayout;
