import React, { Component } from 'react'
import '../../style/interactive.less'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        <a href="#" className="aButton">hover Me!!!</a>
      </div>
    )
  }
}