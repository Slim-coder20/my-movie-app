import React from "react";

function MovieIdPage({ params }) {
  return (
    <div>
      <h1>Movie Page with id : {params.id}</h1>
    </div>
  );
}

export default MovieIdPage;
