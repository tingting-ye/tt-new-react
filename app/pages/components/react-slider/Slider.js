/**
 *  图片轮播组件
 */
import React, {Component} from 'react'
import SliderItem from './SliderItem'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 当前显示的li
      nowLocal: 0,
    }
  }

  componentDidMount() {
    this.goPlay()
  }

  // 自动轮播
  goPlay() {
    const waiting = this.props.waiting || 5
    const count = this.props.item.length
    const isAutoRun = (this.props.isAutoRun===undefined || this.props.isAutoRun)?true:false
    if (isAutoRun && count>1) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1)
      },waiting* 1000)
    }
  }

  // 暂停自动轮播
  stopPlay() {
    clearInterval(this.autoPlayFlag)
  }

  // 下一步
  turn(n) {
    let _n = this.state.nowLocal + n
    if (_n < 0) {  // 如果当前小于0，则显示第一条
      _n = _n + this.props.item.length
    }
    if (_n >= this.props.item.length) {
      _n = _n - this.props.item.length
    }
    this.setState({
      nowLocal: _n
    })
  }

  render() {
    const count = this.props.item.length
    const direction = this.props.direction || "column"
    const isPause = (this.props.isPause===undefined || this.props.isPause)?true:false
    const isArrows = (this.props.isArrows===undefined || this.props.isArrows)?true:false
    const isDots = (this.props.isDots===undefined || this.props.isDots)?true:false
    const nowLocal = this.state.nowLocal
    const isShowNum = this.props.isShowNum || 1
    let itemArr =  this.props.item.concat(this.props.item.slice(0,isShowNum-1))
    // 获取子集
    const itemNodes = itemArr.map((item, i) => {
      return (
        <SliderItem data={item} key={"item" + i} sliderIndex={i} count={count} direction={direction} nowLocal={nowLocal} isShowNum={isShowNum}/>
      )
    })

    return (
      <div
        className="slider_bg"
        onMouseOver={!isPause ? null : this.stopPlay.bind(this)}
        onMouseOut={!isPause ? null : this.goPlay.bind(this)}
        >
        <ul
          className="sliderItem"
        >
          {itemNodes}
        </ul>
        {!isArrows || count<=1 ? null : <SliderArrows turn={this.turn.bind(this)} direction={direction}/>}
        {!isDots || count<=1 ? null : <SliderDots turn={this.turn.bind(this)} nowLocal={nowLocal} count={count}/>}
      </div>
    );
  }
}

Slider.autoPlayFlag = null