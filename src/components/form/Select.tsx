import React from "react";
import { Client, Hotel } from "../../Types";

interface Props {
  name: string;
  value: string | number;
  options: Hotel[] | Client[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ name, value, options, handleChange }: Props) => (
  <select name={name} value={value} onChange={handleChange} required>
    {options.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))}
  </select>
);

export default Select;
