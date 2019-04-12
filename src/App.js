import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
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
import { BrowserRouter as Router, Link } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
  <Router>
    <Container text>
      <Image src="http://i68.tinypic.com/xlgnt0.png" />
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
      <Link to="/ReferralForm" primary size="huge" inverted color="orange">
        Contact Us <Icon name="right arrow" />
      </Link>{" "}
    </Container>{" "}
  </Router>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

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
      <Router>
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
              style={{
                minHeight: 200,
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
                    <Link as="a" to="/SchoolDistrictForm" inverted={!fixed}>
                      School Districts{" "}
                    </Link>{" "}
                  </Menu.Item>{" "}
                </Container>{" "}
              </Menu>{" "}
              <HomepageHeading />
            </Segment>{" "}
          </Visibility>{" "}
          {children}{" "}
        </Responsive>{" "}
      </Router>
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
          <Menu.Item as="a"> Are you a School District ? </Menu.Item>{" "}
          <Menu.Item as="a"> Programs </Menu.Item>{" "}
          <Menu.Item as="a"> Contact Us </Menu.Item>{" "}
          <Menu.Item as="a"> Careers </Menu.Item>{" "}
        </Sidebar>{" "}
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
                  <Button as="a"> School Districts </Button>{" "}
                </Menu.Item>{" "}
              </Menu>{" "}
            </Container>{" "}
            <HomepageHeading mobile />
          </Segment>{" "}
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
        padding: "5em 0em"
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
            services and after school programming.We guide young adults toward a
            life of excellence, leadership and service.Young adults are taught
            responsibility, accountability, life skills, social skills and work
            ethic, while receiving an equal blend of therapeutic and clinical
            services.Prodigy Healthcare, Inc.serves youth and their families
            through evidence - based programming designed to promote pro -
            social behavior and healthy lifestyles.{" "}
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
              <h1> From our CEO </h1> <h2> JD Dhanda </h2>{" "}
              <p
                style={{
                  fontSize: "1.33em"
                }}
              >
                <Image
                  avatar
                  src="https://s3-media2.fl.yelpcdn.com/bphoto/iTe51Wt32z1SBB4TBLJynA/ls.jpg"
                />{" "}
                "We here at Prodigy Healthcare strive to...."{" "}
              </p>{" "}
            </Header>{" "}
          </Grid.Column>{" "}
          {/* <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em"
            }}
          >
            <Image src="http://i65.tinypic.com/1k8di.png" />
          </Grid.Column>{" "} */}
        </Grid.Row>{" "}
      </Grid>{" "}
    </Segment>{" "}
    <Segment
      style={{
        padding: "5em 0em"
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
          Every single team member of Prodigy Healthcare Inc.is committed to
          providing the highest quality of counseling services available to all
          adolescents and their families.Prodigy Healthcare Inc.counselors are
          registered or certified with one of eight state approved accrediting
          agencies for substance abuse counseling certification.{" "}
        </p>{" "}
        <Button as="a" size="large">
          Join Our Team!{" "}
        </Button>{" "}
      </Container>{" "}
    </Segment>{" "}
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
                  <List.Item to="/" as="a">
                    {" "}
                    Back to the Top{" "}
                  </List.Item>{" "}
                  <List.Item to="/" as="a">
                    {" "}
                    School Districts{" "}
                  </List.Item>{" "}
                  <List.Item as="a"> Our Programs </List.Item>{" "}
                  <List.Item to="/ReferralPage" as="a">
                    {" "}
                    Contact Us{" "}
                  </List.Item>{" "}
                  <List.Item as="a"> Careers </List.Item>{" "}
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
    </Router>{" "}
  </ResponsiveContainer>
);
export default HomepageLayout;
