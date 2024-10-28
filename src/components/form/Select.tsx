import React from "react";

interface Props {
  name: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  type?: string;
}

const Select = ({ name, value, handleChange, type }: Props) => (
  <select name={name} value={value} onChange={handleChange} required></select>
);

export default Select;
