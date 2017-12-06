
import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import { Button } from 'antd'
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin'
TweenOne.plugins.push(SvgMorphPlugin)

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.animation = {
      d: 'M60,10L60,90L140,90L140,10Z',
      yoyo: true,
      repeat: -1,
      duration: 1000,
    };
    this.state = { tweenData: '100%' }
  }

  componentDidMount() { }

  render() {
    return (
      <div className="tweenOne-svgDeformation">
        <svg width="200" height="130" version="1.2" style={{ display: 'block', margin: 'auto' }}>
          <TweenOne
            animation={this.animation}
            style={{ fill: '#019BF0' }}
            paused={false}
            component="path"
            d="M60,50 a40,40 0 1,0 80,0a40,40 0 1,0 -80,0z"
            attr="attr"
          />
        </svg>
      </div>
    )
  }
}
