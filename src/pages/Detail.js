import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "./../component/Youtube";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Detail(props) {
  const [Film, setFilm] = useState([]);
  const Movieid = props.match.params.id;
  const menu = props.match.params.menu;
  console.log(props);
  //   const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${menu}/${Movieid}?api_key=b4136201ac9df556a64e14039a475721&language=en-US`
      )
      .then((result) => {
        setFilm(result.data);
        // console.log(result);
      });
  }, [Movieid, menu]);

  return (
    <div>
      <div>
        <h2 className="h2">{Film.title}</h2>
        <YouTube menu={menu} me={Movieid} onReady />
      </div>
      <Container className="Description">
        <Row>
          <img
            alt=""
            src={
              "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
              Film.poster_path
            }
          />
          <Col md={6}>
            <h3 className="h2">{Film.title}</h3>
            <h3 className="DescTitle">{Film.overview}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
