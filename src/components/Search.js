import React, { useState } from 'react';

const Search = ({ onTermChange}) => {
  const [search, setSearch] = useState('');
  
  
  const searchClickHandler = () => {
    if (search === '') {
      alert('Empty Input')
    } else {
      onTermChange(search)
    }
  };

  return (
    <div className="row-center">
      <input
        type='text'
        className="form-control"
        placeholder="framework"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        onClick={searchClickHandler}
        type='button'
        className='btn btn-secondary'
      >
        Search
      </button>
    </div>
  );
};

export default Search;
