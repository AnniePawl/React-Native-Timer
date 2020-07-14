import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Button, TextInput} from 'react-native'
// Import actio to add new Timer
import { addTimer } from '../actions';
// import './timers.css';

class NewTimer extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
	}
	render() {
		return (
			<View>
        {/* Does Native have "input" ?? */}
				<TextInput
					placeholder="Add Timer Name"
					// name="name"
					value={this.state.name}
					onChangeText={text => this.setState({ name:text })}
				/>
				<Button
          title = 'Save Timer'
					onPress={() => {
						this.props.addTimer(this.state.name);
					}}
				/>
			
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