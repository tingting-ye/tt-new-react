import React, { Component } from 'react'

import Slider from "react-slick"

var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props} style={{display: 'block', background: 'red'}}></div>;
  }
});

var SamplePrevArrow = React.createClass({
  render: function() {
    return (
      <div {...this.props} style={{display: 'block', background: 'red'}}></div>
    );
  }
});

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() { }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{ width: "400px" }}>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    )
  }
}
