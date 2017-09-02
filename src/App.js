import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'false',
    }
  }
  // constructor

  // updateColor
  updateColor = (color) => {
    // console.log('color in our parent!!', color)
    this.setState({ fontColor: color })
  }

  // updateSize
  updateSize = (size) => {
    // console.log('color in our parent!!', color)
    this.setState({ fontSize: Number(size) })
  }

  // updateFamily

  updateFamily = (family) => {
    this.setState({ fontFamily: family })
  }

  // updateEditStatus
  updateEditStatus = (status) => {
    this.setState({allowEdit: status})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle
            update= {this.updateEditStatus}
          />
          <ColorChanger
            disabled = {this.state.allowEdit}
            update= {this.updateColor}
          />
          <SizeChanger
            disabled = {this.state.allowEdit}
            update= {this.updateSize}
            />
          <FamilyChanger
            disabled = {this.state.allowEdit}
            update= {this.updateFamily}/>
        </div>
        <div className="textArea">
          <TextContainer
           fontColor= {this.state.fontColor}
           fontSize= {this.state.fontSize}
           fontFamily= {this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
