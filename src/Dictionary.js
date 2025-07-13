import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
// import Photos from "./Photos";    // ← temporarily disabled
import "./Dictionary.css";

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults]   = useState(null);
  const [error, setError]       = useState(null);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleDictionaryError(err) {
    console.error("Dictionary API error", err);
    setError("Could not fetch definitions.");
  }

  function search() {
    setError(null);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`)
      .then(handleDictionaryResponse)
      .catch(handleDictionaryError);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword.trim()) return;
    search();
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
       <form onSubmit={handleSubmit}>
  <input
    type="search"
    className="search-input"
    value={keyword}
    onChange={handleKeywordChange}
    placeholder="e.g. sunset, yoga, coding"
    autoFocus
  />
</form>

        <div className="hint">
          suggested words: sunset, wine, yoga, plant…
        </div>
      </section>

      {error && <p className="error">{error}</p>}

     {results && <Results definition={results} />}


      {/* Photos component temporarily disabled */}
      {/* <Photos photos={photos} /> */}
    </div>
  );
}
