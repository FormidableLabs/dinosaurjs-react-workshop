import React from 'react';

import { Consumer as ThemeConsumer } from './ThemeContext';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ color }) => (
          <button
            className="button"
            onClick={() => { console.log('button clicked!') }}
            style={{ backgroundColor: color }}
          >
            {this.props.children}
          </button>
        )}
      </ThemeConsumer>
    );
  }
}
