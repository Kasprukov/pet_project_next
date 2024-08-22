import React from 'react';
import Select, { StylesConfig, GroupBase } from 'react-select';

const species = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const status = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const gender = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default function Filters() {
    const customStyles: StylesConfig<any, false, GroupBase<any>> = {
      control: (provided) => ({
        ...provided,
        backgroundColor: 'black',
      }),
      menu: (provided) => ({
        ...provided,
        backgroundColor: 'grey',
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'lightgreen' : 'black',
      }),
    };
  
    return (
      <>
        <Select
          styles={customStyles}
          options={species}
        />
        <Select
          styles={customStyles}
          options={status}
        />
        <Select
          styles={customStyles}
          options={gender}
        />
      </>
    );
  }