import React from 'react';
import Button from '../../components/button';
import Display from '../../components/display';

class StatesApp extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
    this.buy = this.buy.bind(this);
    this.eat = this.eat.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        this.buy();
      } else if (e.keyCode === 40) {
        this.eat();
      }
    });
  }


  buy() {
    this.setState(prev => ({ amount: prev.amount + 1 }));
  }

//   changeAmount(parameter) {
//     const { amount } = this.state;
//     return () => {
//       if (amount + parameter < 0) {
//         this.setState({
//           amount: 0,
//         });
//       } else {
//         this.setState({
//           amount: amount + parameter,
//         });
//       }
//     };
//   }

  eat() {
    const { amount } = this.state;
    if (amount > 0) {
      this.setState(prev => ({ amount: prev.amount - 1 }));
    }
  }

  render() {
    const { amount } = this.state;
    return (
      <div>
        <Button str="Buy one" func={this.buy} />
        <Display num={amount} />
        <Button str="Eat one" func={this.eat} />
      </div>
    );
  }
}

export default StatesApp;
