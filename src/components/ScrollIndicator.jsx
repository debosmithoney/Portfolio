import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="main h-1 fixed bg-black top-0 left-0 z-50 w-full">
      <div className="indicate bg-red-700 h-full " style={{width:`${scrollTop}%`}}></div>
    </div>
  );
};

export default ScrollIndicator;
