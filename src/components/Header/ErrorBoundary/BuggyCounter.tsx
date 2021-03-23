import React, { Component } from 'react';
import Button from '../../Generic/Button/Button';
import VariantBtn from '../../Generic/Button/Button.types';

interface CounterState {
  counter: number;
}

type BuggyCounterProps = Record<string, unknown>;

class BuggyCounter extends Component<BuggyCounterProps, CounterState> {
  constructor(props: BuggyCounterProps) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render(): JSX.Element {
    const { counter } = this.state;
    if (counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <Button variantButton={VariantBtn.SearchBy} active className="btn_search" onClick={this.handleClick}>
        {counter}
      </Button>
    );
  }
}

export default BuggyCounter;
