import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const onHover = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
};

const LinkHome = () => {
  const [divAhovering, DivAHoveringProps] = onHover();
  return (
      <Link to="/">
        <div
          className=" fixed top-20 lg:top-40 right-20 lg:right-32 cursor-pointer transition ease-in-out duration-300 lg:hover:-translate-x-8 font-bold z-50"
          {...DivAHoveringProps}
        >
          <h1 className="transition flex ease-in-out duration-300 hover:text-red-600">
            • Debosmit {!divAhovering ? "" : "  Choudhury"}
          </h1>
        </div>
      </Link>
  )
}

export default LinkHome