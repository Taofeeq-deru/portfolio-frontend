import React, { Component } from "react";
import "./Projects.css";
import ScrollAnimation from "react-animate-on-scroll";
import ListClass from "./ProjectList";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class Projects extends Component {
  state = {};

  render() {
    const { project } = this.props;

    const djangoReact =
      project &&
      project.filter((djreact) => {
        return djreact.language_used === "Django & React-JS";
      });

    const django =
      project &&
      project.filter((dj) => {
        return dj.language_used === "Django";
      });

    const react =
      project &&
      project.filter((reactJs) => {
        return reactJs.language_used === "React-JS";
      });

    const javascript =
      project &&
      project.filter((js) => {
        return js.language_used === "Javascript";
      });

    return (
      <div className="container project">
        <div id="Projects">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1>PROJECTS</h1>
            </div>
          </div>
        </div>
        <div id="content">
          <ScrollAnimation
            animateIn="animate__zoomIn"
            animateOut="animate__zoomOut"
            duration={1}>
            <Tabs>
              <TabPane tab="All" key="1">
                <ListClass language={project} identity="all" />
              </TabPane>
              <TabPane tab="JavaScript" key="2">
                <ListClass language={javascript} identity="dj" />
              </TabPane>
              <TabPane tab="React-JS" key="3">
                <ListClass language={react} identity="react" />
              </TabPane>
              <TabPane tab="Django & React-JS" key="4">
                <ListClass language={djangoReact} identity="djreact" />
              </TabPane>
              <TabPane tab="Django" key="5">
                <ListClass language={django} identity="dj" />
              </TabPane>
            </Tabs>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Projects;
