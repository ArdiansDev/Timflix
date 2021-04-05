import React from "react";
import Popularslider from "./../component/Popularslider";
import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "./../component/Youtube";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Credits from "../component/Credit";

function Detail(props) {
  const [Film, setFilm] = useState([]);
  const Movieid = props.match.params.id;
  const menu = props.match.params.menu;
  // console.log(props);
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
      <Container className="">
        <Row className="detail">
          <img
            alt=""
            src={
              "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
              Film.poster_path
            }
          />

          {/* <Col className="Title"></Col> */}
          <Col lg={8}>
            <h3>{Film.name}</h3>
            <h3>{Film.title}</h3>
            <h4>{Film.overview}</h4>
            <Credits {...props} />
          </Col>
        </Row>
        <br />
        <Popularslider />
      </Container>
    </div>
  );
}

export default Detail;
