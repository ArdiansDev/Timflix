import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
export default class Categories extends Component {
  state = {
    post: [],
    show: false,
  };
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=b4136201ac9df556a64e14039a475721"
      )
      .then((result) => {
        this.setState({
          post: result.data.genres,
        });
        console.log(result.data.genres);
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
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 1,
    };

    return (
      <div>
        <h2>Categories</h2>
        <button className="button" onClick={this.previous}>
          sebelumnya
        </button>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.post.map((post) => (
            <div>
              <div>{post.name}</div>
            </div>
          ))}
          {/* </div> */}
        </Slider>
        <button className="button" onClick={this.next}>
          lanjut
        </button>
        <div style={{ textAlign: "center" }}></div>
      </div>
    );
  }
}
