import React, { Component } from 'react'
import Sence from './child/sence'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.button = this.button.bind(this)
  }

  button(){
    alert("error")
  }

  render() {
    return (
      <div>
        <h1>PropsTypes校验器</h1>
        <Sence 
          button={this.button}
          name={"ytt"}
          age={12}
          sex={false}
          intersting={[1,2,3,4]}
        />
      </div>
    )
  }
}
