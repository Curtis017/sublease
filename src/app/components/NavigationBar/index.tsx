import * as React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar: React.StatelessComponent = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Subleases">Subleases</Link>
    </li>
    <li>
      <Link to="/Profile">Profile</Link>
    </li>
  </ul>
);

export default NavigationBar;