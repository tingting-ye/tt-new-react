import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import { Button } from 'antd'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moment: null,
      paused: true,
      reverse: false,
    }
    this.animation = { left: '70%', duration: 2000 }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.reverse = this.reverse.bind(this)
    this.restart = this.restart.bind(this)
  }

  componentDidMount() { }

  play() { this.setState({ paused: false, reverse: false, moment: null }) }

  pause() { this.setState({ paused: true, moment: null }) }

  reverse() { this.setState({ paused: false, reverse: true, moment: null }) }

  restart() {
    this.setState({ paused: false, reverse: false, moment: 0 }, () => {
      this.setState({ moment: null })
    })
  }

  render() {
    return (
      <div className="tweenOne-changeState">
        <Button type="primary" onClick={this.play}>播放</Button>
        <Button type="primary" onClick={this.pause}>暂停</Button>
        <Button type="primary" onClick={this.reverse}>倒退</Button>
        <Button type="primary" onClick={this.restart}>重新开始</Button>
        <TweenOne
          animation={this.animation} // 需要执行动画的参数
          style={{ transform: 'scale(1)' }} // 行内样式
          className="code-box-shape" // 自定义样式
          paused={this.state.paused} // 暂停动画
          reverse={this.state.reverse} // 倒放动画
          moment={this.state.moment} // 设置当前时间上的时间，设置完后设回null
        // reverse={true} 
        // reverseDelay={1000} // 开始倒放时的延迟
        // onChange={null} // 全局变量回调
        // resetStyleBool={false} // 更新animation数据时，是否重置初始化样式
        // updateReStart={true} // 每次更新animation数据时，是否重新开始动画
        />
      </div>
    )
  }
}
