import React from 'react';
import Select from 'react-select';
import { customStyles } from './selectStyles';

interface FilterSelectProps {
  options: { value: string; label: string }[];
  placeholder: string;
  onChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ options, placeholder, onChange }) => {
  return (
    <Select
      styles={customStyles}
      options={options}
      placeholder={placeholder}
      isClearable
      onChange={(option) => onChange(option ? option.value : "")}
    />
  );
};

export default FilterSelect;