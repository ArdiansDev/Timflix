import TopRated from "../component/TopRated";
import Jumbo from "./../component/Jumbotron";
import Popularslider from "./../component/Popularslider";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

function Home() {
  return (
    <div>
      <div className="Home">
        <Jumbo />
        <Row>
          <Col md={6}>
            <Popularslider />
          </Col>
          <Col md={6}>
            <TopRated />
          </Col>
        </Row>
      </div>
      {/* <button src="/Movie" className="watchmore">
        Watch more
      </button> */}
    </div>
  );
}

export default Home;
