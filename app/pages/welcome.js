import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount(){
    // 离开当前页面时，弹出啊确认
    // this.props.router.setRouteLeaveHook(
    //   this.props.route,
    //   this.routerLeaveInformation
    // )
  }

  // routerLeaveInformation(){
  //   return "you sure you want to leave this page?"
  // }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          Wecome to 随心旅程
        </div>
      </div>
    );
  }
}