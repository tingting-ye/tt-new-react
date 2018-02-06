
// import 'whatwg-fetch'
import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getJsonList()
  }

  getJsonList() {
    // fetch('/public/text.json')
    //   .then(function (response) {
    //     return response.json()
    //   }).then(function (json) {
    //     console.log('parsed json', json)
    //   }).catch(function (ex) {
    //     console.log('parsing failed', ex)
    //   })
  }

  render() {
    console.log(this.state.list)
    return (
      <div>dfs</div>
    )
  }
}