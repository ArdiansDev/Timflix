import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
class TopratedSlider extends Component {
  state = {
    post: [],
    show: false,
  };
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  redirectToPopular = () => {
    const { history } = this.props;
    if (history) history.push("/TopRated");
  };
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b4136201ac9df556a64e14039a475721&language=en-US"
      )
      .then((result) => {
        this.setState({
          post: result.data.results,
        });
        // console.log(result.data.results);
      });
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
    };

    return (
      <div>
        <div className="">
          <h2 className="popularsl">Top Rated</h2>
          <div className="buttonflex">
            <FontAwesomeIcon
              className="button"
              icon={faChevronCircleLeft}
              size={"2x"}
              color={"white"}
              onClick={this.previous}
            />
            <br />
            <FontAwesomeIcon
              className="button"
              icon={faChevronCircleRight}
              size={"2x"}
              color={"white"}
              onClick={this.next}
            />
          </div>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.post.map((post) => (
            <div key={post.id}>
              <Card>
                <Card.Img
                  src={
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
                    post.poster_path
                  }
                  onClick={() =>
                    this.props.history.push(`/Detail/movie/${post.id}`)
                  }
                />
                <Card.Title>{post.title} </Card.Title>
              </Card>
            </div>
          ))}
        </Slider>

        <div style={{ textAlign: "center" }}></div>
      </div>
    );
  }
}
export default withRouter(TopratedSlider);
