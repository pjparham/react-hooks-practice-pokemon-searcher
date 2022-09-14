import React, { useState} from "react";

function Search({ setSearchQuery }) {
  const [search, setSearch] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    setSearchQuery(search)
  }

  return (
    <div className="ui search">
      <form onSubmit={handleSubmit} >
        <div className="ui icon input">
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="prompt" />
          <i className="search icon" />
        </div>
      </form>
    </div>
  );
}

export default Search;
