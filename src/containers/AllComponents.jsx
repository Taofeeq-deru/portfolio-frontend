import React, { Component } from "react";
import { Affix, BackTop } from "antd";
import { UpCircleFilled } from "@ant-design/icons";
import Nav from "../components/Nav";
import Introduction from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

class AllComponents extends Component {
  state = {};
  render() {
    const { content } = this.props;
    return (
      <div>
        <BackTop style={{ fontSize: 36 }}>
          <UpCircleFilled />
        </BackTop>
        <Introduction />
        <Affix offsetTop={content.top}>
          <Nav
            onClick={() => {
              this.setState({
                top: content.top + 10,
              });
            }}
          />
        </Affix>
        <div style={{ backgroundColor: "#e9e9e9" }}>
          <About contact={content.contact} skill={content.skill} />
        </div>
        <div style={{ backgroundColor: "#ffffff" }}>
          <Projects project={content.project} />
        </div>
        <div style={{ backgroundColor: "#333846" }}>
          <Contact contact={content.contact} />
        </div>
      </div>
    );
  }
}

export default AllComponents;
