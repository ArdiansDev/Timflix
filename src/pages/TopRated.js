import React from "react";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Page from "../component/Pagination";
function TopRated(props) {
  const history = useHistory();
  const [Film, setFilm] = useState([]);
  const [page, setpage] = useState(1);
  const menu = props.menu;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${menu}/top_rated?api_key=b4136201ac9df556a64e14039a475721&language=en-US&page=${page}`
      )
      .then((result) => {
        setFilm(result.data.results);
      });
  }, [page, menu]);

  return (
    <div>
      <div>
        <h2 className="h2">TopRated</h2>
        <CardColumns>
          {Film.map((item) => {
            return (
              <Card key={item.id}>
                <Card.Img
                  onClick={() =>
                    history.push({
                      pathname: `/Detail/${menu}/${item.id}`,

                      props: { item },
                    })
                  }
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500//" + item.poster_path}
                />
                <Card.Title>
                  {item.name}
                  {item.title}
                </Card.Title>
              </Card>
            );
          })}
        </CardColumns>
        <Page me={page} before={(page) => setpage(page)} />
      </div>
    </div>
  );
}

export default TopRated;
