import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <p>Choose a category:</p>
        <select name="selectCategory">
          <option value="animal">Animal</option>
          <option value="dev">Dev</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Form;
