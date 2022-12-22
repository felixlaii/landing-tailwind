import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
      };

  return (
    <div>Navbar</div>
  )
}

export default Navbar