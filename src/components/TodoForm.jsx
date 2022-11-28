import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();

  const handleClick = () => {
    add(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>추가</button>
    </div>
  );
}
