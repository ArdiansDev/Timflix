import React from "react";
import TopRated from "./TopRated";

import Popular from "./Popular";
function TV() {
  return (
    <div>
      <div className="TV">
        <Popular menu={"tv"} />
        <TopRated menu={"tv"} />
      </div>
    </div>
  );
}

export default TV;
