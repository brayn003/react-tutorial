import React from 'react';

import Card from './Card';
// import Video from './Video';
import Counter from './Counter';
// import Picture from './Picture';
// import Video from './Video';

const fruits  = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange', 'apple', 'banana', 'orange', 'apple', 'banana', 'orange'];

const App = () => {
  return (
    <Card>
      <ol>
        {fruits.map((item) => {
          return <li>{item}</li>
        })}
      </ol>
    </Card>
  )
}

export default App;
