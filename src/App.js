import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Programs from "./components/Programs";
import PropTypes from "prop-types";
import Footer from "./components/Footer";

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
          fontSize: mobile ? "1em" : "1.5em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? ".5em" : "1.5em"
        }}
      />{" "}
      <Link to="/ReferralForm" primary size="huge" inverted color="orange">
        <Button basic color="yellow">
          Contact Us{" "}
        </Button>{" "}
        <Icon name="right arrow" color="yellow" />
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
                  <Link to="/" inverted={!fixed} active>
                    <Menu.Item as="a"> Home </Menu.Item>{" "}
                  </Link>{" "}
                  <Menu.Item position="right">
                    <Link to="/SchoolDistrictForm" inverted={!fixed}>
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
          <Link to="/">
            <Menu.Item as="a"> Home </Menu.Item>{" "}
          </Link>
          <Link to="/SchoolDistrictForm">
            <Menu.Item as="a"> Are you a School District ? </Menu.Item>{" "}
          </Link>
          <Link to="/CareersForm">
            <Menu.Item as="a"> Careers </Menu.Item>{" "}
          </Link>
          <Link to="/ReferralsForm">
            <Menu.Item as="a"> Contact Us </Menu.Item>{" "}
          </Link>
        </Sidebar>{" "}
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 200,
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
          <Programs />
        </Grid.Row>{" "}
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
              <h1>Our Clientele</h1>
            </Header>{" "}
          </Grid.Column>{" "}
        </Grid.Row>{" "}
      </Grid>{" "}
    </Segment>{" "}
    <Segment
      style={{
        padding: "2em 0em"
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
          fluid
        >
          Every single team member of Prodigy Healthcare Inc.is committed to
          providing the highest quality of counseling services available to all
          adolescents and their families.Prodigy Healthcare Inc.counselors are
          registered or certified with one of eight state approved accrediting
          agencies for substance abuse counseling certification.{" "}
        </p>{" "}
        <Link to="/CareersForm">
          <Button as="a" size="large">
            Join Our Team!{" "}
          </Button>{" "}
        </Link>{" "}
      </Container>{" "}
    </Segment>{" "}
    <Footer />
  </ResponsiveContainer>
);
export default HomepageLayout;
