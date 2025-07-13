import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword]   = useState(defaultKeyword);
  const [results, setResults]   = useState(null);
  const [photos, setPhotos]     = useState(null);
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

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function handlePhotoError(err) {
    console.error("Photos API error", err);
  }

  function search() {
    setError(null);

    // Dictionary API
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`)
      .then(handleDictionaryResponse)
      .catch(handleDictionaryError);

    // SheCodes Images API
    const sheKey    = process.env.REACT_APP_SHECODES_KEY;
    const imagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheKey}`;
    axios
      .get(imagesUrl)
      .then(handlePhotoResponse)
      .catch(handlePhotoError);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword.trim()) return;
    search();
  }

  return (
    <div className="Dictionary container py-4">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. sunset, yoga, coding"
            autoFocus
          />
        </form>
        <div className="hint">suggested words: sunset, wine, yoga, plant…</div>
      </section>

      {error && <p className="error">{error}</p>}

      {results && <Results definition={results} />}

      {/* Show photos once loaded */}
      {photos && <Photos photos={photos} />}
    </div>
  );
}
