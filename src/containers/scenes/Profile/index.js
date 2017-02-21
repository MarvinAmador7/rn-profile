import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

import { fetchWelcomeMessage } from '../../../actions/welcome';
// import styles from './styles';

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    actions : bindActionCreators({fetchWelcomeMessage}, dispatch),
  };
}

class Profile extends Component {

  static propTypes = {
    actions                       : React.PropTypes.object.isRequired,
    reducers                      : React.PropTypes.object.isRequired,
    'actions.fetchWelcomeMessage' : React.PropTypes.func,
  }

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.actions.fetchWelcomeMessage();
  }

  render () {
    return (
      <View>
        <Text>{this.props.reducers.welcome.toJS().message}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
