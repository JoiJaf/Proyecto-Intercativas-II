import React, { useState } from 'react';

export function Timeset() {
  const [time, setTime] = useState('10:00');

  return (
    <div className="time-picker ">
      <input className='text-[1.4rem] ml-[-.6rem]'
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  );
}
