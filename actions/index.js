// All actions defined here
// Actions descibe how data can be modified
// Each action should be defined as const w/ string value
// Each action needs action creator

// DELETE TIMER
export const deleteTimer = (index) => {
	return {
		type: DELETE_TIMER,
		payload: { index }
	};
};

// Add Timer
// Adds new timer object to array of timers
export const addTimer = (name) => {
	return {
		type: NEW_TIMER,
		payload: { name }
	};
};

// Toggle Timer
// Starts and stops timer (required index of timer)
export const toggleTimer = (index) => {
	return {
		type: TOGGLE_TIMER,
		payload: { index }
	};
};

// Select Timer
// Selects a timer and displays details about it (requires index of timer)
export const selectTimer = (index) => {
	return {
		type: SELECT_TIMER,
		payload: { index }
	};
};

// Update Action
// deltaTime used to calc what time should be displayed
export const update = (deltaTime) => {
	return {
		type: UPDATE,
		payload: { deltaTime }
	};
};

// Export actions so other modules can access them
export const NEW_TIMER = 'NEW_TIMER';
export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const SELECT_TIMER = 'SELECT_TIMER';
export const UPDATE = 'UPDATE';
export const DELETE_TIMER = 'DELETE_TIMER';
