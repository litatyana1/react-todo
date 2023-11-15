import React, { useEffect, useRef } from 'react';

function InputWithLabel({ id, children, value, onInputChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(event) => onInputChange(event.target.value)}
        ref={inputRef} 
      />
    </>
  );
}

export default InputWithLabel;