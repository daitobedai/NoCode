import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';
import {Menu, Icon, Layout} from 'antd';
import "whatwg-fetch";
const {Content} = Layout;

class App extends React.Component {
  handleClick(e) {
    switch (e.key){
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
            <Menu.Item key="content">
              <Icon type="bulb"/>查看
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
