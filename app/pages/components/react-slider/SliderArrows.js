/**
 *  轮播图左右切换
 */
import React, { Component } from 'react'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleArrowClick (option) {
    this.props.turn(option)
  }

  render () {
    const { direction } = this.props
    return (
      <div>
        {
          direction === 'row' ? (
            <div className="slider-arrows-wrap">
              <span
                className="slider-row slider-row-top"
                onClick={this.handleArrowClick.bind(this, -1)}>
                &uarr;
              </span>
              <span
                className="slider-row slider-row-bottom"
                onClick={this.handleArrowClick.bind(this, 1)}>
                &darr;
              </span>
            </div>
          ) : (
            <div className="slider-arrows-wrap">
              <span
                className="slider-arrow slider-arrow-left"
                onClick={this.handleArrowClick.bind(this, -1)}>
                  &lt;
              </span>
              <span
                className="slider-arrow slider-arrow-right"
                onClick={this.handleArrowClick.bind(this, 1)}>
                  &gt;
              </span>
            </div>
          )
        }
      </div>
    )
  }
}
