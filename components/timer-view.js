import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

// Import our toggleTimer action
import { toggleTimer } from '../actions';
import { deleteTimer } from '../actions';

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
				<Text style={styles.timerName}>{timer.name}</Text>
				<Text style={styles.time}>{formatTime(timer.time)}</Text>
				<View style={styles.buttons}>
					{/* Start/Stop Button */}
					<TouchableOpacity
						style={styles.startButton}
						onPress={(e) => {
							toggleTimer(index);
						}}
					>
						<Text>{timer.isRunning ? 'STOP' : 'START'}</Text>
					</TouchableOpacity>
					{/* Delete Button */}
					<TouchableOpacity
						style={styles.deleteButton}
						onPress={(e) => {
							this.props.deleteTimer(index);
						}}
					>
						<Text>DELETE</Text>
					</TouchableOpacity>
				</View>

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
	return { toggleTimer, deleteTimer };
};
export default connect(mapStateToProps, mapDispatchToProps())(TimerView);

const styles = StyleSheet.create({
	timersStyles: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 8
	},
	startButton: {
		// borderWidth: 2,
		backgroundColor: '#ebff7d',
		// backgroundColor: '#8ae3ba',
		height: 30,
		width: 65,
		margin: 10,
		borderBottomEndRadius: 3,
		borderTopEndRadius: 3,
		borderBottomStartRadius: 3,
		borderTopStartRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	deleteButton: {
		// borderWidth: 2,
		backgroundColor: '#ff9a96',
		// backgroundColor: '#8ae3ba',
		height: 30,
		width: 60,
		margin: 10,
		borderBottomEndRadius: 3,
		borderTopEndRadius: 3,
		borderBottomStartRadius: 3,
		borderTopStartRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row'
	},
	timerName: {
		fontSize: 28,
		marginLeft: 15,
		textTransform: 'uppercase',
		color: '#7acfa7',
		fontWeight: 'bold'
		// justifyContent: 'flex-start'
		// marginRight: 20
	},
	time: {
		fontSize: 28,
		justifyContent: 'center',
		color: '#5dcfe3'
	}
});
