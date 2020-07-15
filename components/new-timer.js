import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
// Import actio to add new Timer
import { addTimer } from '../actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import './timers.css';

class NewTimer extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
	}
	render() {
		return (
			<View style={styles.newTimerContainer}>
				{/* Does Native have "input" ?? */}
				<TextInput
					style={styles.inputText}
					placeholder="Name a New Timer"
					value={this.state.name}
					onChangeText={(text) => this.setState({ name: text })}
				/>
				<TouchableOpacity
					style={styles.touchableOpacityStyles}
					onPress={() => {
						this.props.addTimer(this.state.name);
					}}
				>
					<Text>SAVE</Text>
				</TouchableOpacity>

				{/* Replaced Butotn with Touchable opactiy for style flexibility */}
				{/* <Button
					style={styles.touchableOpacityStyles}
					title="Save Timer"
					onPress={() => {
						this.props.addTimer(this.state.name);
					}}
				/> */}
			</View>
		);
	}
}

// Not needed ?
const mapStateToProps = (state) => {
	return {};
};

// Connects newTimer action creator to this component
const mapDispatchToProps = () => {
	return { addTimer };
};

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer);

// Styles
const styles = StyleSheet.create({
	newTimerContainer: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 20,
		borderBottomWidth: 2,
		borderBottomColor: '#8ae3ba'
	},
	inputText: {
		backgroundColor: '#e7ff96',
		textAlign: 'center',
		borderWidth: 2,
		borderBottomEndRadius: 8,
		borderTopEndRadius: 8,
		borderBottomStartRadius: 8,
		borderTopStartRadius: 8,
		borderColor: '#8ae3ba',
		height: 45,
		width: '50%'
	},
	touchableOpacityStyles: {
		// borderWidth: 2,
		// backgroundColor: '#ebff7d',
		backgroundColor: '#8ae3ba',
		height: 30,
		width: 80,
		margin: 10,
		marginBottom: 20,
		borderBottomEndRadius: 3,
		borderTopEndRadius: 3,
		borderBottomStartRadius: 3,
		borderTopStartRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
