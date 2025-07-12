import React, { useEffect } from "react";

export default function Dictionary(props) {
  console.log("► Dictionary mount – props.defaultKeyword:", props.defaultKeyword);

  useEffect(() => {
    console.log("► Dictionary useEffect fired – you can stub search here");
  }, []);

  return (
    <div className="Dictionary">
      <h1>✅ Dictionary is rendering!</h1>
    </div>
  );
}
