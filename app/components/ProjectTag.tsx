import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyle = isSelected
    ? "text-white border-[#28949B]"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
