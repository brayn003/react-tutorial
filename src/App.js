import React from 'react';

import Text from './Text';
import Picture from './Picture';
import Video from './Video';

const App = () => {
  return (
    <div>
      <Picture />
      <Video />






{/* 


      <Text
        string="fhdsbjfhdsbf"
        num={66}
        bool={true}
        func={() => {}}
        obj={{a: 'b', c: 4}}
        arr={[1, 2, 3, 4, 5]}
      /> */}



<Text 
        weight="bold" 
        color="red" 
        spaceBottom={10} 
        isMale={true} 
        onClickingText={() => {
          console.log('hit hard')
        }}
      />
      <Text 
        weight="bold" 
        color="red" 
        spaceBottom={10} 
        isMale={true} 
        onClickingText={() => {
          console.log('hit hard 2')
        }}
      />
      <Text 
        weight="bold" 
        color="red" 
        spaceBottom={10} 
        isMale={true} 
        onClickingText={() => {
          console.log('hit hard fewfwe')
        }}
      />
      <Text 
        weight="bold" 
        color="red" 
        spaceBottom={10} 
        isMale={true} 
        onClickingText={() => {
          const a = 2 + 3
          console.log('hit hard', a);
        }}
      />
      <p  className="my-class">Hi there jhdsbjdsh</p>
    </div>
  )
}

export default App;
