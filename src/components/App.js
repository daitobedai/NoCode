import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';
import {Menu, Icon, Layout} from 'antd';
import "whatwg-fetch";
const {Content} = Layout;

class App extends React.Component {
  handleClick(e) {
    switch (e.key){
      case 'demo':
        browserHistory.push('/fuel-savings');
        break;
      case 'home':
        browserHistory.push('/');
        break;
      case 'content':
        browserHistory.push('/content');
        break;
      default:
        browserHistory.push('/');
    }
  }

  render() {
    return (
      <Layout>
        <Content>
          <Menu
            mode="horizontal"
            onClick={this.handleClick}
            defaultSelectedKeys={['home']}
          >
            <Menu.Item key="home">
              <Icon type="home"/>首页
            </Menu.Item>
            <Menu.Item key="demo">
              <Icon type="bulb"/>demo
            </Menu.Item>
            <Menu.Item key="content">
              <Icon type="bulb"/>content
            </Menu.Item>
          </Menu>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
