
import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'

export default class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.animation = {
      left: '100px', // 结束位置
      top: '100px', // 结束位置
      yoyo: true, // 重复时执行返回动画
      repeat: -1, // 重复次数
      duration: 2000, // 动画时间
      opacity: 0.2, // 透明度
      backgroundColor: 'yellow',
      width: '100px',
      height: '100px'
    }
  }

  componentDidMount () { }

  render () {
    return (
      <div className="tweenOne-drift">
        <TweenOne
          animation={this.animation} // 需要执行动画的参数
          style={{}} // 行内样式
          className="code-box-shape" // 自定义样式
          paused={false} // 暂停动画
          // reverse={true} // 倒放动画
          // reverseDelay={1000} // 开始倒放时的延迟
          // moment={null} // 设置当前时间上的时间，设置完后设回null
          // onChange={null} // 全局变量回调
          // resetStyleBool={false} // 更新animation数据时，是否重置初始化样式
          // updateReStart={true} // 每次更新animation数据时，是否重新开始动画
        />
      </div>
    )
  }
}
