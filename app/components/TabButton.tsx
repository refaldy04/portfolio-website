import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClass = active ? "text-white" : "text-[#adb7be]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
      <motion.div
        variants={variants}
        animate={active ? "active" : "default"}
        className="h-1 bg-secondary mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
