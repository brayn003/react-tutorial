import React, {Component} from 'react';
import Text from './Text';

// Functional Component / State-less component
// const Counter = () => {
//   return (
//     <div></div>
//   )
// };

// Class Components / State-ful components
class Counter extends Component {

  state = {
    count: this.props.startCount,
    name: 'Rudra'
  }

  componentDidMount() {
    console.log('>> component mounted');
  }

  handleDecrementClick = () => {
    this.setState({count: this.state.count - 1});
  }

  handleIncrementClick = () => {
    this.setState({count: this.state.count + 1});
  }

  handleInputChange = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    const {count, name} = this.state;
    return (
      <div>
        {name === 'delete' 
          ? null 
          : (
            <div>
              <button onClick={this.handleDecrementClick}>--</button>
              <p>{count}</p>
              {count % 2 === 0 ? (<Text>Even</Text>) : (<Text weight="bold" color="red">Odd</Text>)}
              <button onClick={this.handleIncrementClick}>++</button>
            </div>
          )
        }

        <div>
          <input value={name} onChange={this.handleInputChange} />
        </div>
      </div>
    )
  }

}

export default Counter;