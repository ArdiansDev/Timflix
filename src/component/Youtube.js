import React from "react";

import YouTube from "react-youtube";

import { useState, useEffect } from "react";
import axios from "axios";

function Detail(props) {
  const [Film, setFilm] = useState();
  //   const Movieid = props.match.params.id;
  const Movieid = props.me;
  const menu = props.menu;
  //   console.log(props);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${menu}/${Movieid}/videos?api_key=b4136201ac9df556a64e14039a475721&language=en-US`
      )
      .then((result) => {
        setFilm(result.data.results[0].key);
        console.log(result.data.results[0].key);
      });
  }, [Movieid, menu]);
  const opts = {
    top: 0,
    left: 0,
    // bottom: 0,

    height: "100%",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <div className="Youtube">
        <YouTube className="player" videoId={Film} opts={opts} />;
      </div>
    </div>
  );
}

export default Detail;
