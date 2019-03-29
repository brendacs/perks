import React, { Component } from 'react';
import { Tab, GuideContainer, GuideBox, CloseText } from './styles';

class Guide extends Component {
  constructor() {
    super();
    this.state = {
      showGuide: false
    }
  }

  toggleGuide = () => {
    this.setState({ showGuide: !this.state.showGuide });
  }

  render() {
    return (
      <div>
        <Tab onClick={this.toggleGuide}>?</Tab>
        { this.state.showGuide ? (
          <GuideContainer onClick={this.toggleGuide}>
            <GuideBox>
            </GuideBox>
            <CloseText>Click anywhere to close</CloseText>
          </GuideContainer> ) : null
        }
      </div>
    );
  }
}

export default Guide;
