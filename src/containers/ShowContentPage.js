import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/showContentActions';
import ShowContent from '../components/ShowContent';

export const ShowContentPage = (props) => {
  return (
    <ShowContent
      getContent={props.actions.getContent}
      changeIfameSource={props.actions.changeIfameSource}
      showContent={props.showContent}
    />
  );
};

ShowContentPage.propTypes = {
  actions: PropTypes.object.isRequired,
  showContent: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    showContent: state.showContent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowContentPage);
