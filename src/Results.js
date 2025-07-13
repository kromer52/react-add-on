// Results.js
import React from "react";
import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results({ definition }) {
  if (!definition) return null;

  // 1) flatten all definitions across meanings
  const allDefs = [];
  definition.meanings.forEach((meaning) => {
    meaning.definitions.forEach((d) => {
      allDefs.push({
        partOfSpeech: meaning.partOfSpeech,
        definition: d.definition,
        example: d.example,
        synonyms: d.synonyms,
      });
    });
  });

  // 2) take only the first two
  const firstTwo = allDefs.slice(0, 2);

  return (
    <div className="Result">
      <section>
        <h1>{definition.word}</h1>
        <Phonetic phonetic={definition.phonetic} />
      </section>

      {firstTwo.map((item, idx) => (
        <section key={idx}>
          <h3>{item.partOfSpeech}</h3>
          <div className="definition">{item.definition}</div>
          {item.example && <div className="example">{item.example}</div>}
          <Synonyms synonyms={item.synonyms} />
        </section>
      ))}
    </div>
  );
}
