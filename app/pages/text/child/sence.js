import React, { Component,PropTypes } from 'react'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const interst = this.props.intersting.join(",")
    return (
      <div>
        <p onClick={()=>this.props.button()}>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.sex?"男":"女"}</p>
        <p>{interst}</p>
      </div>
    )
  }
}

index.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  sex:PropTypes.bool,
  intersting:PropTypes.array,
  getAge:PropTypes.func
}