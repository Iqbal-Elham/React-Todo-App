import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const ref = useRef();

  useEffect(
    () => {
      const handler = (event) => {
        if (dropDown && ref.current && !ref.current.contains(event.target)) {
          setDropDown(false);
        }
      };
      document.addEventListener('mousedown', handler);
    }, [dropDown],
  );

  return (
    <nav>
      <ul>
        <li ref={ref}>
          <button type="button" onClick={() => setDropDown((prev) => !prev)}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropDown && (
          <ul>
            <li>New features </li>
            <li>more</li>
          </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
