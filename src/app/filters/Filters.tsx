import React from 'react';
import Select, { StylesConfig, GroupBase } from 'react-select';

const speciesOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const statusOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const genderOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const customStyles: StylesConfig<any, false, GroupBase<any>> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#161827',
    color: '#F1F2F9',
    borderColor: state.isFocused ? 'green' : 'white',
    width: '200px',
    transition: 'all 0.5s ease',
    '&:hover': {
      borderColor: 'green',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#F1F2F9',
    padding: '2px 4px',
    borderRadius: '4px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#161827',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'lightgreen' : '#161827',
    color: state.isSelected ? '#161827' : '#F1F2F9',
    transition: 'all 1s ease',
    '&:hover': {
      backgroundColor: 'grey',
      color: '#F1F2F9',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#F1F2F9',
  }),
};

export default function Filters() {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div>
        <label className="text-white mb-2 block min-w-20">Species</label>
        <Select
          styles={customStyles}
          options={speciesOptions}
          placeholder="Select Species"
        />
      </div>
      <div>
        <label className="text-white mb-2 block">Status</label>
        <Select
          styles={customStyles}
          options={statusOptions}
          placeholder="Select Status"
        />
      </div>
      <div>
        <label className="text-white mb-2 block">Gender</label>
        <Select
          styles={customStyles}
          options={genderOptions}
          placeholder="Select Gender"
        />
      </div>
    </div>
  );
}
