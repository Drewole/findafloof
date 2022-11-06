import React, { useState, useEffect } from 'react';

import store from 'store/dist/store.modern.min';

const FilterForm = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const initialSearchPrefs = {
    dogs: true,
    cats: true,
    location: '',
    goodWithChildren: '',
    goodWithDogs: '',
    goodWithCats: '',
    baby: '',
    young: '',
    adult: true,
    senior: true,
  };

  const [searchPrefs, setSearchPrefs] = useState(initialSearchPrefs);
  const updateField = (e) => {
    setSearchPrefs({
      ...searchPrefs,
      [e.target.name]: e.target.checked || e.target.value,
    });
  };
  useEffect(() => {
    store.get('searchPrefs') ? setSearchPrefs(store.get('searchPrefs')) : '';
  }, []);

  useEffect(() => {
    store.set('searchPrefs', searchPrefs);
    console.log(searchPrefs, 'search prefs');
  }, [searchPrefs]);

  return <div className="filters-wrapper">Filters go here</div>;
};

export default FilterForm;
