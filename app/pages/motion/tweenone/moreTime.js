import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import { Button } from 'antd'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { moment: null }
    this.animation = [
      { top: "50px" },
      { left: "20%" },
      { blur: "10px" },
      { scale: 0.7 },
      { opacity: 0.2 },
      { opacity: 1 },
      { scale: 1 },
      { blur: "0px" },
      { left: "0%" },
      { top:"50px" },
    ]
    this.play = this.play.bind(this)
  }

  componentDidMount() { }

  play() { this.setState({ moment: 0 }) }

  render() {
    return (
      <div className="tweenOne-moreTime">
        <Button type="primary" onClick={this.play}>播放</Button>
        <TweenOne
          animation={this.animation} // 需要执行动画的参数
          style={{ transform: 'scale(1)' }} // 行内样式
          className="code-box-shape" // 自定义样式
          paused={false} // 暂停动画
          moment={this.state.moment} // 设置当前时间上的时间，设置完后设回null
        // reverse={true} // 倒放动画
        // reverseDelay={1000} // 开始倒放时的延迟
        // onChange={null} // 全局变量回调
        // resetStyleBool={false} // 更新animation数据时，是否重置初始化样式
        // updateReStart={true} // 每次更新animation数据时，是否重新开始动画
        />
      </div>
    )
  }
}
