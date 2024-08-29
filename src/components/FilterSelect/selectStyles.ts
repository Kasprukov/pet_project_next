import { StylesConfig, GroupBase } from 'react-select';

export const customStyles: StylesConfig<any, false, GroupBase<any>> = {
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
  clearIndicator: (provided) => ({
    ...provided,
    color: '#F1F2F9',
    cursor: 'pointer',
  }),
};