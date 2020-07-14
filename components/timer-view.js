import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTimer, deleteTimer } from '../actions';
import { formatTime } from '../utils';

// import './timers.css';

class TimerView extends Component {
	constructor(props) {
		super(props);
	}

	// Timer needs name, time, stop/stop button
	render() {
		// need these props for component
		const { index, toggleTimer, timer } = this.props;

		return (
			<div className="timer-view__container">
				<h2 className="timer-view__name">{timer.name}</h2>
				<h1 className="timer-view__time">{formatTime(timer.time)}</h1>
				<button
					className="timer-view__button"
					onClick={(e) => {
						toggleTimer(index);
					}}
				>
					{timer.isRunning ? 'Stop' : 'Start'}
				</button>
				{/* delete button */}
				<button
					onClick={(e) => {
						this.props.deleteTimer(index);
					}}
				>
					Delete
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

// Use toggleTimer action

const mapActionsToProps = () => {
	return { toggleTimer, deleteTimer };
};

export default connect(mapStateToProps, mapActionsToProps())(TimerView);
