/**
 *  轮播图图片
 */
import React, {Component} from 'react'

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data,nowLocal,sliderIndex,isShowNum,direction} = this.props
    const width = direction==="column" ? (100 / isShowNum+'%'):'100%'
    const height = direction==="column" ? '100%' :(100/isShowNum+'%')
    const compareArr = []
    for(let i=0;i<isShowNum;i++){
      const index = i+ nowLocal
      compareArr.push(index)
    }
    return (
      <li className={ compareArr.indexOf(sliderIndex)>=0 ? "slider_item active":"slider_item hidden"} style={{width:width,height:height}}>{data.content}</li>
    );
  }
}