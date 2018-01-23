import React, { Component } from 'react'
import Slider from '../components/react-slider/js/Slider'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[
        {
          id:1,
          title:"Road this book",
          description:"I should read the whole book",
          status:"progress",
        },
        {
          id:2,
          title:"write some code",
          description:"code along with the samples in the book",
          status:"todo",
        },
        {
          id:3,
          title:"I want to know you name",
          description:"one two three",
          status:"todo",
        },
        {
          id:4,
          title:"oh no",
          description:"it's begining",
          status:"ytt",
        },
        {
          id:5,
          title:"it's perfect",
          description:"it's begining",
          status:"ytt",
        },
        {
          id:5,
          title:"it's perfect",
          description:"it's begining",
          status:"progress",
        },
      ]
    }
  }

  render() {
    const arr = this.state.list.filter((item)=>item.status==="ytt")
    console.log(arr)
    return (
      <div>
        通过this.state.list.filter((item)=>item.status==="")的方法可以迅速遍历出对应status的数据
        <p>详情可参照代码</p>
      </div>
    )
  }
}
