import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";

class ProfileInfo extends Component {
  state = {
    value: "",
    isInEditMode: false
  };

  validate(values) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};

    if (values.email === "") {
      errors.email = "Insert email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is not in the supported format";
    }
    return errors;
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    });
  };

  renderEditView = () => {
    return (
      <div>
        <Formik validate={this.validate.bind(this)}>
          {props => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextField
                id="firstName"
                label="Firstname"
                fullWidth
                defaultValue={this.state.value}
                ref="theTextInput"
                style={{ textAlign: "center", color: "Gray" }}
              />
              <button onClick={this.changeEditMode}>X</button>
              <button onClick={this.updateComponentValue}>Ok</button>

              <TextField
                id="lastName"
                label="Lastname"
                fullWidth
                style={{ textAlign: "center", color: "Gray" }}
              />

              <TextField
                id="UName"
                label="Username"
                fullWidth
                style={{ textAlign: "center", color: "Gray" }}
              />

              <TextField
                id="email"
                label="Email"
                fullWidth
                style={{ textAlign: "center", color: "Gray" }}
                className={`form-control ${
                  props.errors.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage name="email" className="invalid-feedback" />
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>{this.state.value}</div>;
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default ProfileInfo;
