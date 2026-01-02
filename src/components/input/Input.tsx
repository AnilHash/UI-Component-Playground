import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
