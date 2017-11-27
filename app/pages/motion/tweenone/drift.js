
import React, {Component} from 'react'
import TweenOne from 'rc-tween-one'
import PropTypes from 'prop-types'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.animation = {
      left: '20%',
      yoyo: true,
      repeat: -1,
      duration: 1000
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="tweenOne-drift">
        <TweenOne
          animation={this.animation} // 需要执行动画的参数
          style={{left: '-20%'}} // 行内样式
          className="code-box-shape" // 自定义样式
          paused = {false} // 暂停动画
          reverse = {false} // 倒放动画
          reverseDelay={1000} // 开始倒放时的延迟
          moment={null} // 设置当前时间上的时间，设置完后设回null
          onChange={null} // 全局变量回调
          resetStyleBool={false} // 更新animation数据时，是否重置初始化样式
          updateReStart={true} // 每次更新animation数据时，是否重新开始动画
        />
      </div>
    )
  }
}
