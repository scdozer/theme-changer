import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   allowEdit: this.props.allowEdit
    // };
  }

  // componentWillReceiveProps

  render() {
    return (
      // <select className="dropDownContainer" onChange={(e) => console.log('e.target.value', e.target.value)}>
      <select className="dropDownContainer" onChange={(e) => this.props.update(e.target.value)} disabled= {this.props.disabled === "true"}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}
