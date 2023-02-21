import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-around">
        <li>
          <Link to="/containerSpacing">Container Spacing</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/sizing">Sizing</Link>
        </li>
        <li>
          <Link to="/border">Border</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
