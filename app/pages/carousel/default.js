/**
 * Created by tingting on 2017/5/3.
 */
import React,{Component} from 'react'
import Slider from '../components/react-slider/Slider'

export default class index extends Component{
  constructor(props){
    super(props)
    this.state = {
      // 存放图片信息
      item: [
        {
          content:1
        },
        {
          content:2
        },
        {
          content:3
        },
        {
          content:4
        },
        {
          content:5
        },
        {
          content:6
        },{
          content:7
        },{
          content:8
        },{
          content:9
        }
      ],
      // 判断是否自动轮播(不传默认为true)
      // isAutoRun:false,
      // 是否显示左右键(不传默认为true)
      // isArrows:false,
      // 是否显示底部切换点(不传默认为true)
      // isDots:false,
      // 鼠标放置是否继续播放(不传默认为true)
      // isPause:false,
      // 轮播等待时间(默认两秒)
      // waiting:10,
      // 每次显示个数
      isShowNum:3,
      // 横向还是纵向(默认横向"column")
      direction:"column",
    }
  }
  
  componentDidMount(){}

  render() {
    return (
      <div className="slider_map">
        <Slider
          {...this.state}
        />
      </div>
    );
  }
}