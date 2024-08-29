import React from 'react';
import FilterSelect from '../FilterSelect/FilterSelect';
import { genderOptions, speciesOptions, statusOptions } from './options';

interface FiltersProps {
  updateSpecies: (value: string) => void;
  updateStatus: (value: string) => void;
  updateGender: (value: string) => void;
}

export default function Filters({ updateSpecies, updateStatus, updateGender }: FiltersProps) {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div>
        <label className="text-white mb-2 block">Species</label>
        <FilterSelect
          options={speciesOptions}
          placeholder="Select Species"
          onChange={updateSpecies}
        />
      </div>
      <div>
        <label className="text-white mb-2 block">Status</label>
        <FilterSelect
          options={statusOptions}
          placeholder="Select Status"
          onChange={updateStatus}
        />
      </div>
      <div>
        <label className="text-white mb-2 block">Gender</label>
        <FilterSelect
          options={genderOptions}
          placeholder="Select Gender"
          onChange={updateGender}
        />
      </div>
    </div>
  );
}
