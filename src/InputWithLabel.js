import { useRef, useEffect } from 'react';

const InputWithLabel = ({ label }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label>{label}</label>
      <input ref={inputRef} />
    </>
  );
};

export default InputWithLabel;