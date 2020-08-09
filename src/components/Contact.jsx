import React, { Component } from "react";
import {
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./Contact.css";

class Contact extends Component {
  state = {};
  render() {
    const { contact } = this.props;

    return (
      <div className="container contact">
        <div id="Contact">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1>Contact</h1>
              <div id="contactDetails">
                <a href={`tel:${contact.phone_number}`}>
                  <PhoneOutlined />
                </a>
                <a href={`mailto:${contact.email}`}>
                  <MailOutlined />
                </a>
                <a
                  href={contact.linkedin_url}
                  target="contact"
                  rel="noopener noreferrer">
                  <LinkedinOutlined />
                </a>
                <a
                  href={contact.github_url}
                  target="contact"
                  rel="noopener noreferrer">
                  <GithubOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div>
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <form
                  action="https://formspree.io/oluderutaofeeq@gmail.com"
                  method="POST">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id=""
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      id=""
                      rows="6"></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-outline-light">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
