import React from "react";

interface Props {
  name: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = ({ name, value, handleChange, type }: Props) => (
  <input
    type={type || "text"}
    name={name}
    value={value}
    onChange={handleChange}
    required
  />
);

export default Input;
