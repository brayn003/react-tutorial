import React from  'react';
import './Text.css';

const Text = (props) => {
  const {
    spaceBottom = 0, 
    color = 'black',
    weight = 'normal', 
    isMale = false,
    onClickingText = () => {}
  } = props;
  return (
    <p 
      style={{
        marginBottom: 16 + spaceBottom,
        color: color,
        fontWeight: weight
      }}
      onClick={onClickingText}
    >
      Hello {isMale ? 'boy' : 'girl'}!
    </p>
  )
}

export default Text;