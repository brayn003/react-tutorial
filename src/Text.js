import React, {Component} from  'react';
import './Text.css';

class Text extends Component {

  componentDidMount() {
    console.log('>>> Text Mounted', this.props.children);
  }

  componentWillUnmount() {
    console.log('>>> Text Unounted', this.props.children);
  }

  componentDidUpdate() {
    console.log('>>> Text COmponent Updated');
  }

  render () {
    const {
      spaceBottom = 0, 
      color = 'black',
      weight = 'normal', 
      onClickingText = () => {},
      children,
    } = this.props;
    return (
      <p 
        style={{
          marginBottom: 16 + spaceBottom,
          color: color,
          fontWeight: weight
        }}
        onClick={onClickingText}
      >
        {children}
      </p>
    )
  }
}

export default Text;