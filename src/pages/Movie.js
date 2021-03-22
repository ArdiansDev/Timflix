import React from "react";
import TopRated from "./TopRated";

import Popular from "./Popular";
function Movie(props) {
  return (
    <div>
      <div className="Movie">
        <Popular menu={"movie"} />
        <TopRated menu={"movie"} />
      </div>
    </div>
  );
}

export default Movie;
