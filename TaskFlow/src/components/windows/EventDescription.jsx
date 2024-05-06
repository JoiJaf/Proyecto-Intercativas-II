import "../../index.css";
import React, { useState } from 'react';

export function EventDescription() {
  const [description, setDescription] = useState('');

  return (
    <textarea className="border-[.1rem] border-[black] mt-[1rem] ml-[2rem]"
      value={description} 
      onChange={(e) => setDescription(e.target.value)}
      rows="6" 
      cols="46"
      placeholder="Description..."
    />
  );
}

