
import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import { Button } from 'antd'
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin'
TweenOne.plugins.push(SvgDrawPlugin)

const dataStartArr = ['30 150', '50% 50%', '30% 200', '20 30%', 0, '100%']
let i = 0

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { tweenData: '100%' }
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() { }

  onClick() {
    const tweenData = dataStartArr[i]
    this.setState({ tweenData })
    i++
    i = i >= dataStartArr.length ? 0 : i
  }

  render() {
    return (
      <div className="tweenOne-svgLine">
        <Button type="primary" onClick={this.onClick}>切换</Button>
        <svg width="200" height="84" version="1.2" style={{ display: 'block', margin: 'auto' }}>
          <TweenOne
            animation={{ SVGDraw: this.state.tweenData, duration: 1000 }}
            style={{ fill: 'none', strokeWidth: 10, stroke: '#019BF0' }}
            component="path"
            d="M10,10c65,50,115,50,180,0"
          />
        </svg>
        <p>当前参数：{this.state.tweenData}</p>
      </div>
    )
  }
}
