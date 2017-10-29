import React, {Component} from 'react'
import BannerAnim, {Element} from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'

const BgElement = Element.BgElement

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: [
        {url: '../../img/DSCF8029.jpg'},
        {url: '../../img/DSCF8075.jpg'},
        {url: '../../img/DSCF8083.jpg'},
        {url: '../../img/DSCF8105.jpg'},
        {url: '../../img/DSCF8108.jpg'}
      ]
    }
  }

  componentDidMount () {}

  render () {
    const {dataList} = this.state
    return (
      <div className="page">
        <div className="page-banner">
          {/* prefixCls 自定义样式 */}
          <BannerAnim prefixCls="" autoPlay>
            {dataList.map((data, index) =>{
              const url = `url(${data.url})`
              return (
                <Element prefixCls="" key={index}>
                  <BgElement
                    key="bg"
                    className="bg"
                    style={{
                      backgroundImage: url,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <TweenOne className="" animation={{y: 0, opacity: 0, type: 'from'}}>
                    </TweenOne>
                  </BgElement>
                </Element>
              )
            }
            )}
          </BannerAnim>
        </div>
      </div>
    )
  }
}
