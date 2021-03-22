import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import { useState, useEffect } from "react";
import axios from "axios";
import Page from "../component/Pagination";
function Popular(props) {
  const [Film, setFilm] = useState([]);
  const [page, setpage] = useState(1);
  const menu = props.menu;
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${menu}/popular?api_key=b4136201ac9df556a64e14039a475721&language=en-US&page=${page}`
      )
      .then((result) => {
        // setdata(result.data);
        setFilm(result.data.results);
        // console.log(result);
      });
  }, [page, menu]);

  return (
    <div>
      <div>
        <h2 className="h2">Popular</h2>

        <CardColumns>
          {Film.map((item) => {
            return (
              <Card key={item.id}>
                <Card.Img
                  onClick={() =>
                    history.push({
                      pathname: `/Detail/${menu}/${item.id}`,

                      props: { item, menu },
                    })
                  }
                  variant="top"
                  src={
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
                    item.poster_path
                  }
                  menu={menu}
                />
                <Card.Title>{item.title}</Card.Title>
              </Card>
            );
          })}
        </CardColumns>
        <Page me={page} before={(page) => setpage(page)} />
      </div>
    </div>
  );
}

export default Popular;
