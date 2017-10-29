import React, { Component } from 'react'
import { Router, Link, hashHistory } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon, Message } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import '../../config'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topMenu: '/', //顶部导航默认值
      leftMenu: '',//左侧二级导航值
      leftMenuArr: [],//左侧导航数据集合
    }
    this.topMenuClick = this.topMenuClick.bind(this)
    this.leftMenuClick = this.leftMenuClick.bind(this)
  }

  componentWillMount() {
    const url = this.props.location.pathname || '/'
    this.getFirstMenu(url)
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.location && nextProps.location && this.props.location.pathname != nextProps.location.pathname) {
    //   this.getFirstMenu(nextProps.location.pathname)
    // }
  }

  // 获取导航条数据
  getFirstMenu(url) {
    const navs = global.$GLOBALCONFIG.NAVIGATION || []
    this.state.leftMenuArr = []
    let params = { topMenu: "/", leftMenu: "" }
    navs.map((nav, index) => {
      let leftMenu = ""
      const children = nav.children
      // 判断链接是否符合一级导航链接条件
      if (nav.url !== "/" && url.indexOf(nav.url) > -1) {
        // 符合
        // 完全一致，则为一级导航
        if (url === nav.url) {
          if (children.length > 0) {
            leftMenu = children[0].url
            this.state.leftMenuArr = children
          } else {
            leftMenu = ""
          }
          params = { topMenu: url, leftMenu: leftMenu }
        } else {
          // 不完全一致，则搜索二级菜单
          // 如果一级下无二级菜单则提示无链接，返回首页
          if (children.length > 0) {
            this.state.leftMenuArr = children
            nav.children && nav.children.map((child) => {
              if (child.url === url) {
                params = { topMenu: nav.url, leftMenu: child.url }
              }
            })
          }
        }
      }
    })
    this.setState({ topMenu: params.topMenu, leftMenu: params.leftMenu }, () => {
      if (params.leftMenu && url!==params.leftMenu) {
        hashHistory.push(params.leftMenu)
      } else if(url!==params.topMenu){
        hashHistory.push(params.topMenu)
      }
    })
  }

  // 点击切换头部导航栏
  topMenuClick(e) {
    const navs = global.$GLOBALCONFIG.NAVIGATION || []
    const url = e.key
    let leftMenu = ""
    let leftMenuArr = []
    navs.map((nav, index) => {
      const children = nav.children
      if (url === nav.url && children.length > 0) {
        leftMenuArr = children
        leftMenu = children[0].url
      }
    })
    if (leftMenu) {
      hashHistory.push(leftMenu)
    } else {
      hashHistory.push(url)
    }
    this.setState({
      topMenu: url,
      leftMenu: leftMenu,
      leftMenuArr: leftMenuArr,
    })
  }

  // 点击切换左侧导航栏
  leftMenuClick(e) {
    this.setState({
      leftMenu: e.key
    },()=>{
      hashHistory.push(e.key)
    })
  }

  render() {
    const { children } = this.props
    const { topMenu, leftMenu, leftMenuArr } = this.state
    const navs = global.$GLOBALCONFIG.NAVIGATION || []
    return (
      <Layout >
        <Header className="header">随心旅程 System</Header>
        <div className="topMenu">
          <Menu theme="light" mode="horizontal" style={{ lineHeight: '32px' }}
            selectedKeys={[topMenu]} onClick={this.topMenuClick}
          >
            { navs.map((nav, index) => { return <Menu.Item key={nav.url}>{nav.name}</Menu.Item> }) }
          </Menu>
        </div>
        <Layout>
          {
            leftMenuArr.length > 0 ? (
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  selectedKeys={[leftMenu]}
                  onClick={this.leftMenuClick}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  {
                    leftMenuArr.map((nav) => {
                      return <Menu.Item key={nav.url}>{nav.name}</Menu.Item>
                    })
                  }
                </Menu>
              </Sider>
            ) : null
          }
          <Layout style={{ padding: '10px' }}>
            <Content className="content" style={{ background: '#fff',padding: '10px'}}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout >
    );
  }
}