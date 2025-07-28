import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const ButtonClasses= active ? "text-white border-b border-purple-500" : "text-[#ADB7BE]"
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${ButtonClasses}`}>
        {children}
      </p>
    </button>
  );
}

export default TabButton