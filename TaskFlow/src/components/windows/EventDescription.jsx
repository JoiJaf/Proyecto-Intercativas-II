import "../../index.css";
import React, { useState } from "react";

export function EventDescription() {
  const [description, setDescription] = useState("");

  return (
    <textarea
      className="border-[.1rem] border-[black] mt-[1rem] mx-auto w-[calc(100%-4rem)] md:w-[24.5rem] p-[.5rem]"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      rows="6"
      placeholder="Description..."
    />
  );
}
