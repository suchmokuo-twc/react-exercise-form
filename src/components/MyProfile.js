import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    formValus: {
      name: "",
      gender: "male",
      description: "",
      conductRead: false,
    },
    submitReady: false,
  };

  onFormValueChange = (field, event) => {
    const { state, checkSubmitReady } = this;
    const { formValus } = state;
    const { target } = event;
    const newValue = this.getFormItemValue(target);

    this.setState(
      {
        ...state,
        formValus: {
          ...formValus,
          [field]: newValue,
        },
      },
      checkSubmitReady
    );
  };

  checkSubmitReady() {
    const { state } = this;
    const { name, gender, description, conductRead } = state.formValus;
    const submitReady = name && gender && description && conductRead;

    this.setState({
      ...state,
      submitReady,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { formValus } = this.state;

    console.log(formValus);
  };

  render() {
    const { state } = this;
    const { submitReady } = state;
    const { name, gender, description, conductRead } = state.formValus;

    return (
      <div className="my-profile">
        <h1>My Profile</h1>

        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            onChange={(event) => this.onFormValueChange("name", event)}
            value={name}
          />

          <label htmlFor="email">Gender</label>
          <select
            type="text"
            id="gender"
            onChange={(event) => this.onFormValueChange("gender", event)}
            value={gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            placeholder="Description about yourself"
            onChange={(event) => this.onFormValueChange("description", event)}
          ></textarea>

          <input
            type="checkbox"
            id="conductRead"
            checked={conductRead}
            onChange={(event) => this.onFormValueChange("conductRead", event)}
          />
          <label htmlFor="conductRead">I have read the terms of conduct</label>

          <button onClick={this.onSubmit} disabled={!submitReady}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  getFormItemValue(item) {
    const { tagName, type } = item;
    const tag = tagName.toLowerCase();

    if (tag === "input" && type === "checkbox") {
      return item.checked;
    }

    return item.value;
  }
}

export default MyProfile;
