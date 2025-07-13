import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results({ definition }) {
  if (!definition) return null;

  const audioUrl =
    definition.phonetics?.[0]?.audio || null;

  const targetPos = ["noun", "adjective", "verb"];

  const selectedMeanings = targetPos
    .map((pos) => {
      const m = definition.meanings.find(
        (meaning) => meaning.partOfSpeech === pos
      );
      if (!m) return null;
      return {
        ...m,
        definitions: m.definitions.slice(0, 1),
      };
    })
    .filter(Boolean); // 

  return (
    <div className="Result">
      <section>
        <h1>{definition.word}</h1>
        <Phonetic
          phonetic={definition.phonetic}
          audioUrl={audioUrl}
        />
      </section>


      {selectedMeanings.map((meaning, idx) => (
        <section key={idx}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
