import React, {PropTypes} from 'react';
import {Table,Layout} from 'antd';

const {Sider, Content } = Layout;

class ShowContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleColSelected = this.handleColSelected.bind(this);
  }

  componentDidMount() {
    this.props.getContent();
  }

  handleColSelected(record){
    this.props.changeIfameSource(record.url);
  }

  render(){
    const {showContent} = this.props;

    const tableConfigs = {
      columns:[{
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        onCellClick:this.handleColSelected
      }],
      pagination:false,
      size:'small'
    };

    return (
      <Layout style={{height: window.innerHeight - 48,margin:0,overflow:'hidden'}}>
        <Sider style={{ background: '#fff',overflow: 'auto'}}>
          <Table dataSource={showContent.urlList} columns={tableConfigs.columns} pagination={tableConfigs.pagination}
              size={tableConfigs.size} rowSelection={tableConfigs.rowSelection}/>
        </Sider>
        <Content>
          <iframe src={showContent.iframeSource} style={{height:'100%',width:'100%'}}/>
        </Content>
      </Layout>
    );
  }
}

ShowContent.propTypes = {
  getContent: PropTypes.func.isRequired,
  changeIfameSource: PropTypes.func.isRequired,
  showContent: PropTypes.object.isRequired
};

export default ShowContent;
