import * as React from 'react';
import './NotFound.css';

const logo = require('./logo.svg');

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <header className="NotFound-header">
          <img src={logo} className="NotFound-logo" alt="logo" />
          <h1 className="NotFound-title">Page Not Found</h1>
        </header>
        <p className="NotFound-intro">
          To get started, edit <code>src/NotFound.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default NotFound;
