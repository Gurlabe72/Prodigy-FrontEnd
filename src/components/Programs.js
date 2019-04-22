import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Icon, Segment, Accordion } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class Programs extends Component {
  state = {
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({
      activeIndex: newIndex
    });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Container fluid>
        <Segment inverted>
          <h1>Our Programs</h1>
          <Accordion inverted>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Life Skills{" "}
            </Accordion.Title>{" "}
            <Accordion.Content active={activeIndex === 0}>
              <p>
                The Life Skills Program is designed to develop youth into
                confident, competent, and caring citizens.The overall goal is to
                promote healthy development in adolescents by advancing life
                skills.Involving children at a young age in positive learning
                experiences helps them build a foundation for a strong sense of
                self, optimism for the future, and mastery.Basic life skills
                allow adolescents to respond to situations they experience in
                life and are applicable in more than one setting.{" "}
              </p>{" "}
            </Accordion.Content>{" "}
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Substance Abuse{" "}
            </Accordion.Title>{" "}
            <Accordion.Content active={activeIndex === 1}>
              <p>
                Far from being an isolated problem, early and persistent alcohol
                and other drug(AOD) use is part of a syndrome of problem
                behaviors that affect not only the youth themselves, but their
                families and communities as well.Academic difficulties, criminal
                activity, health - related consequences, poor peer and family
                relationships, mental health issues, early sexual activity and
                teen pregnancy often accompany AOD use.{" "}
              </p>{" "}
              <p>
                Adolescence is an important time of physical growth and
                psychosocial maturation, and AOD use interferes with these
                normal developmental phenomena.AOD use can cause delays or long
                - term deficits in normal physical, intellectual, social, and
                emotional development.When AOD use begins at an early age, it
                can result in permanent developmental and neurological
                damage.Most systems serving youth report that AOD use is a major
                problem among the youth they serve; however, those in need of
                treatment are not consistently identified or referred for
                services.Generally, only those youth which cause serious
                problems in relation to their AOD use tend to be identified and
                receive services, usually in the most restrictive settings(group
                homes, juvenile hall, or correctional institutions).This lack of
                intervention and treatment results in a huge cost to society,
                which escalates over time as these youth reach adulthood and
                enter the criminal justice system or require more serious and
                costly services.{" "}
              </p>{" "}
              <p>
                For the most positive outcomes among youth experiencing AOD -
                related problems, they must have access to age - appropriate
                intervention and treatment, practical support such as life
                skills training and employment, and meaningful opportunities for
                involvement and leadership.Youth need programs that address
                their developmental issues, provide comprehensive and integrated
                services, involve families, and allow youth to remain in the
                most appropriate, but least restrictive setting, so they can be
                served within the context of their families, classroom and
                community.{" "}
              </p>{" "}
            </Accordion.Content>{" "}
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Anger{" "}
            </Accordion.Title>{" "}
            <Accordion.Content active={activeIndex === 2}>
              <p>
                Oftentimes, anger is misunderstood and unrecognized.Adolescents
                getting to know their anger and confronting it is the first step
                in effective anger management.The program is primarily designed
                to help adolescents who get angry too often, become too strongly
                angry when they are upset, lose control of their anger, or can’
                t let go of their anger once a situation is resolved.The Anger
                Management Program utilizes several approaches and curriculums
                which prevent, contain, and resolve anger issues.The approach
                used by Prodigy is perhaps most simply described as a
                straightforward, practical method for changing behavior by
                changing thinking.Adolescents who suffer from anger and other
                unhealthy feelings benefit from this approach in the following
                ways:
              </p>{" "}
              <ul>
                <li> Enhanced resolution of anger. </li>{" "}
                <li> Reduced frequency of aggressive behavior. </li>{" "}
                <li>
                  Increased ability of adolescents to work a treatment program(
                  if applicable).{" "}
                </li>{" "}
                <li> Teaches practical problem - solving methods. </li>{" "}
                <li>
                  Teaches emotional regulation and responsibility for emotions.{" "}
                </li>{" "}
                <li>
                  Reduces externalizing beliefs and behavioral acting out.{" "}
                </li>{" "}
                <li>
                  Keeps adolescents focused on beliefs that underlie their
                  disturbance.{" "}
                </li>{" "}
                <li>
                  {" "}
                  Reveals internal barrier s to change(irrational beliefs
                  related to change).{" "}
                </li>{" "}
              </ul>{" "}
            </Accordion.Content>{" "}
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Gangs{" "}
            </Accordion.Title>{" "}
            <Accordion.Content active={activeIndex === 3}>
              <p>
                Prodigy’ s state - of -the - art program for gang prevention and
                intervention is built on respected concepts of cognitive -
                behavioral treatment(CBT) and motivational interviewing(MI).The
                curriculum utilized provides the most comprehensive approach to
                gang prevention and intervention in community settings.{" "}
              </p>{" "}
              <p>
                The gang prevention and intervention program provides specific
                gang resistance materials including problem solving skills,
                clarifying values, dreams and goals, individual self - esteem
                building, and strength building.Lessons address gang avoidance,
                substance abuse, refusal and“ escape” skills, aggression, anger,
                violence management, interpersonal communication skills, and
                effective coping skills for a variety of high - risk situations.{" "}
              </p>{" "}
              <p>
                Materials also address bullying, development of emotional
                intelligence, character education, and similar positive
                values.Comprehensive gang intervention workbooks address needs
                and risk factors underlying joining a gang, leaving a gang, gang
                violence, and the gang mindset.These anti - gang strategies
                allow adolescents to identify personal risk factors and develop
                action plans to address them.{" "}
              </p>{" "}
            </Accordion.Content>{" "}
            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Parent{" "}
            </Accordion.Title>{" "}
            <Accordion.Content active={activeIndex === 4}>
              <p>
                Based on the assessed needs of the family, parents and parent
                educators work together and select competency based lessons from
                the curriculum to form a parenting program that is customized to
                meet the specific needs of the families.{" "}
              </p>{" "}
              <p>
                The curriculum consists of 80 lessons, each lasting between
                sixty to ninety minutes lessons from evidenced - based
                underpinnings.Families learn nurturing communication strategies,
                how to recognize each other’ s needs, how to understand the
                period of adolescence, and ways to build their own personal
                power, self - esteem, and self - concept.{" "}
              </p>{" "}
              <p>
                Families also discuss pregnancy delay, sex, sexuality, AIDS,
                suicide, and peer pressure.Other topics include cultural
                parenting traditions, making good choices, growth and
                development of children, developing empathy, managing and
                communicating feelings, managing stress and anger, understanding
                discipline, rewards and punishments and celebrating changes,
                etc.{" "}
              </p>{" "}
            </Accordion.Content>{" "}
          </Accordion>{" "}
        </Segment>{" "}
      </Container>
    );
  }
}
