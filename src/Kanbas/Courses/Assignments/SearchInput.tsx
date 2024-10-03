import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function SearchInput() {
  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        <CiSearch />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search for Assignments"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
