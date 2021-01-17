import React, { useState } from 'react';
import axios from 'axios';

import List from './components/List';
import Search from './components/Search';

import './styles/styles.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function that fires the request to Githib Api
  // and manages the response a possible errors
  const handleTermChange = (term) => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/repositories?q=${term}&per_page=10`)
      .then((response) => {
        const allItems = response.data.items;
        setItems(allItems);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
        setItems([]);
      });
  };

  return (
    <div className='container app-container'>
      <div className='row-center'>
        <h1>GitHub Repo App</h1>
      </div>
      <div className='row-left'>
        <Search onTermChange={handleTermChange} />
      </div>
      <div className='row-left'>
        {loading ? <h1>Loading</h1> : <List items={items} />}
      </div>
    </div>
  );
};

export default App;
