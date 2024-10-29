import React from "react";

interface Props {
  name: string;
  value: string | number;
  error?: string;
  type?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, error, type, handleChange }: Props) => (
  <div className="formField">
    <input
      type={type || "text"}
      name={name}
      value={value}
      onChange={handleChange}
      className={error && "error"}
      required
    />
    {error && <span className="errorText">{error}</span>}
  </div>
);

export default Input;
