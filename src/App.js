import React, { useEffect, useRef, useState } from "react";

function EditableField({ value,onChange, onClick }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditing]);

  const startEditing = () => {
    setIsEditing(true);
  };

  const updateValue = (e) => {
    onChange(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <input
          ref={inputRef}
          onBlur={handleSave}
          value={value}
          onChange={updateValue}
          style={{
            border: '1px solid #d7e3eb',
            width: '50px'
          }}
        />
      ) : (
        <div
          onFocus={startEditing}
          tabIndex={0}
          onClick={onClick}
          style={{
            border: '1px solid #d7e3eb',
            width: '50px'
          }}
        >
          {value}
        </div>
      )}
    </>
  );
}


export default function App() {
  const [value1, setValue1] = useState("hello");
  const [value2, setValue2] = useState("world");
  return (
    <>
      <div><EditableField value={value1} onChange={setValue1} /></div>
      <div><EditableField value={value2} onChange={setValue2} /></div>
    </>
  );
}
