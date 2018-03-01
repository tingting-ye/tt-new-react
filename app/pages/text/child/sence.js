import React, { Component, PropTypes } from 'react'

// 自定义propTypes 检验器
let titlePropType = (props, propName, componentName) => {
  debugger
  if (props[propName]) {
    let value = props[propName]
    if (typeof value !== "string" || value.length > 10) {
      return new Error(
        `${propName} in ${componentName} is longerthan 10 characters`
      )
    }
  }

}

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const interst = this.props.intersting.join(",")
    return (
      <div>
        <p onClick={() => this.props.button()}>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.sex ? "男" : "女"}</p>
        <p>{interst}</p>
      </div>
    )
  }
}

index.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  age: PropTypes.number,
  sex: PropTypes.bool,
  intersting: PropTypes.arrayOf(PropTypes.number),
  getAge: PropTypes.func,
  objectData: PropTypes.shape({
    dizhi: PropTypes.string,
    shenghui: PropTypes.string,
    chusheng: PropTypes.number,
  }),
  title: PropTypes.node,
  // title:titlePropType
  // objectData: PropTypes.objectOf(PropTypes.number)  // object内数据类型只限括号内的数据类型，使用其他类型会报错
}