import React, { Component } from 'react'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'
import '../less/slider.less'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowLocal: 0 // 当前显示的li
    }
  }

  componentDidMount() { this.goPlay() }

  componentWillUnmount() { clearInterval(this.autoPlayFlag) }

  // 自动轮播
  goPlay() {
    const waiting = this.props.waiting || 5 // 等待时间，默认5秒
    const count = this.props.item.length // 内容总条数
    const isAutoRun = this.props.isAutoRun === undefined || this.props.isAutoRun // 是否自动播放
    if (isAutoRun && count > 1) { // 如果允许自动轮播并且内容数量大于1
      this.autoPlayFlag = setInterval(() => {
        this.turn(1)
      }, waiting * 1000)
    }
  }

  // 暂停自动轮播
  stopPlay() { clearInterval(this.autoPlayFlag) }

  // 下一步
  turn(n) {
    let _n = this.state.nowLocal + n
    // 如果当前小于0，则显示第一条 
    if (_n < 0) { _n = _n + this.props.item.length }
    if (_n >= this.props.item.length) { _n = _n - this.props.item.length }
    this.setState({ nowLocal: _n })
  }

  render() {
    const count = this.props.item.length
    const direction = this.props.direction || 'column' // 纵向还是横向
    const isPause = this.props.isPause === undefined || this.props.isPause // 鼠标放置是否继续播放
    const isArrows = this.props.isArrows === undefined || this.props.isArrows // 是否显示左右键
    const isDots = this.props.isDots === undefined || this.props.isDots // 是否显示底部切换点
    const nowLocal = this.state.nowLocal
    const isShowNum = this.props.isShowNum || 1  // 当前banner显示几个li
    let itemArr = this.props.sliderItemArr.concat(this.props.sliderItemArr.slice(0, isShowNum - 1))
    // 获取子集
    const width = direction === 'column' ? (100 / isShowNum + '%') : '100%'
    const height = direction === 'column' ? '100%' : (100 / isShowNum + '%')
    const compareArr = []
    for (let i = 0; i < isShowNum; i++) {
      const index = i + nowLocal
      compareArr.push(index)
    }
    const itemNodes = itemArr.map((item, i) => {
      return (
        <li
          key={i}
          className={compareArr.indexOf(i) >= 0 ? 'slider_item active' : 'slider_item hidden'}
          style={{ width: width, height: height }}>
          {item}
        </li>
      )
    })

    return (
      <div
        className="slider_bg"
        onMouseOver={!isPause ? null : this.stopPlay.bind(this)}
        onMouseOut={!isPause ? null : this.goPlay.bind(this)}
      >
        <ul className="sliderItem">
          {itemNodes ? itemNodes : "请自行编辑内容"}
        </ul>
        {!isArrows || count <= 1 ? null : <SliderArrows turn={this.turn.bind(this)} direction={direction} />}
        {!isDots || count <= 1 ? null : <SliderDots turn={this.turn.bind(this)} nowLocal={nowLocal} count={count} />}
      </div>
    )
  }
}

Slider.autoPlayFlag = null
