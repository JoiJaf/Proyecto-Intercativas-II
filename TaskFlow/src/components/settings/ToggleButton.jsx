import React, { useState } from 'react';

function RoundToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);

    if (!isActive) {
      console.log('Activado');
    } else {
      console.log('Desactivado');
    }
    
  };

  return (
    <button
      className={`rounded-full w-[112px] h-[56px] flex justify-left ${isActive ? 'bg-[#6BDD8F]' : 'bg-[#e2e8f0]'} text-white focus:outline-none`}
      onClick={toggleActive}
    >
      <div className={`w-[56px] h-[56px] bg-white rounded-full shadow-md transform transition-transform ${isActive ? 'translate-x-full' : 'translate-x-0'}`}></div>
    </button>
  );
}

export default RoundToggleButton;
