import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useSystemMode } from "../SystemModeContext";

export default function ScrollButton() {
  const systemMode = useSystemMode();

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={`scroll-to-top__div text-colors-${systemMode.toLowerCase()}`}>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
}
