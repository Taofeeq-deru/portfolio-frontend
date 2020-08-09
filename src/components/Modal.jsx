import React from "react";
import { Modal, Button, Carousel } from "antd";

class ModalClass extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { item } = this.props;

    return (
      <div>
        <Button size="large" onClick={this.showModal} ghost>
          View Details
        </Button>
        <Modal
          title={null}
          centered
          visible={this.state.visible}
          style={{ zIndex: 1024 }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}>
          <Carousel autoplay effect="fade">
            <img
              src={`https://res.cloudinary.com/hm95utbuh/${item.image_1}`}
              alt="project"
              className="img-fluid"
              loading="lazy"
            />
            <img
              src={`https://res.cloudinary.com/hm95utbuh/${item.image_2}`}
              alt="project"
              className="img-fluid"
              loading="lazy"
            />
            <img
              src={`https://res.cloudinary.com/hm95utbuh/${item.image_3}`}
              alt="project"
              className="img-fluid"
              loading="lazy"
            />
          </Carousel>
          <h3>
            {item.name}
            <span>
              <br />
              <em style={{ fontSize: "16px", fontWeight: "normal" }}>
                {item.display_skills}
              </em>
            </span>
          </h3>
          <p>{item.about_project}</p>
          <a
            href={item.project_url}
            target="project"
            rel="noopener noreferrer"
            className="mr-3">
            <Button size="large">View Project</Button>
          </a>
          <a href={item.repo_url} target="project" rel="noopener noreferrer">
            <Button size="large">View Repo</Button>
          </a>
        </Modal>
      </div>
    );
  }
}

export default ModalClass;
