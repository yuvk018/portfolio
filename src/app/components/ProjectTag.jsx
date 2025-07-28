import React from 'react'

const ProjectTag = ({name, onClick,isSelected}) => {
    const buttonStyles = isSelected ? "text-white border-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full text-xl cursor-pointer border-2 px-6 py-3`} onClick= {() => onClick(name)}>
      {name}
    </button>
  );
}

export default ProjectTag