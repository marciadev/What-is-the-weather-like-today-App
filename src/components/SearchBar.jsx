import React, { useState } from "react";
import { useHistory } from "react-router";
import './Nav.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  let history = useHistory()

  function devolver(){
    if(history.location.pathname !== '/'){
      history.push('/')
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
      devolver()
    }}>
      <input
        className="NAV"
        type="text"
        placeholder="Country/City/State..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Add" className="button"/>
    </form>
  );
}
