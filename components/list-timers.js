import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTimer } from '../actions';
import TimerView from './timer-view';
import {View} from 'react-native'

class ListTimers extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <View>{this.props.timers.map((timer, i) => <TimerView key={i} timer={timer} index={i} />)}</View>;
	}
}

const mapStateToProps = (state) => {
	return { timers: state.timers };
};

const mapDispatchToProps = () => {
	return { selectTimer };
};

export default connect(mapStateToProps, mapDispatchToProps())(ListTimers);
