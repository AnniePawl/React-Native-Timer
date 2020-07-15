import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet } from 'react-native';

// Import our toggleTimer action
import { toggleTimer } from '../actions';

import { formatTime } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TimerView extends Component {
	constructor(props) {
		super(props);
	}

	// Timer should have its name, time, and a start/stop Button (logic for this Button will be built out later)
	render() {
		// Extract these specific props to use in the component
		const { index, toggleTimer, timer } = this.props;
		return (
			<View style={styles.timersStyles}>
				<Text>{timer.name}</Text>
				<Text>{formatTime(timer.time)}</Text>
				<TouchableOpacity
					style={styles.touchableOpacityStyles}
					onPress={(e) => {
						toggleTimer(index);
					}}
				>
					<Text>{timer.isRunning ? 'Stop' : 'Start'}</Text>
				</TouchableOpacity>

				{/* Replace Button w/ touchable opacity for style flexibility */}
				{/* <Button
					style={styles.startButton}
					title={timer.isRunning ? 'Stop' : 'Start'}
					// This calls our toggleTimer action on the specific timer (specified by the index)
					onPress={(e) => {
						toggleTimer(index);
					}}
				/> */}
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

// Use the toggleTimer action for this component
const mapDispatchToProps = () => {
	return { toggleTimer };
};
export default connect(mapStateToProps, mapDispatchToProps())(TimerView);

const styles = StyleSheet.create({
	touchableOpacityStyles: {
		// borderWidth: 2,
		// backgroundColor: '#ebff7d',
		backgroundColor: '#8ae3ba',
		height: 30,
		width: 80,
		margin: 10,
		borderBottomEndRadius: 3,
		borderTopEndRadius: 3,
		borderBottomStartRadius: 3,
		borderTopStartRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	timersStyles: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 15
	}
});
