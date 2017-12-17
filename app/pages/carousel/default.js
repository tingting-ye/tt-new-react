import React, { Component } from 'react'
import Slider from '../components/react-slider/js/Slider'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 存放图片信息
      item: [
        { url: '../../img/1.jpg' },
        { url: '../../img/2.jpg' },
        { url: '../../img/3.jpg' },
        { url: '../../img/4.jpg' },
        { url: '../../img/5.jpg' },
        { url: '../../img/6.jpg' },
        { url: '../../img/7.jpg' },
        { url: '../../img/8.jpg' },
        { url: '../../img/9.jpg' },
      ],
      // 判断是否自动轮播(不传默认为true) isAutoRun:false,
      // 是否显示左右键(不传默认为true) isArrows:false,
      // 是否显示底部切换点(不传默认为true) isDots:false
      // 鼠标放置是否继续播放(不传默认为true) isPause:false,
      // 轮播等待时间(默认两秒) waiting:10, 每次显示个数
      isShowNum: 2,
      // 横向还是纵向(默认横向"column")
      direction: 'row'
    }
  }

  render() {
    const sliderItemArr = this.state.item.map((obj, i) => {
      return (
        <div><img src={obj.url} /></div>
      )
    })
    return (
      <div className="slider_map">
        <Slider {...this.state} sliderItemArr={sliderItemArr}/>
      </div>
    )
  }
}
