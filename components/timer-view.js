import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Button, Text} from 'react-native'

// Import our toggleTimer action
import { toggleTimer } from '../actions'

import {formatTime} from '../utils'

class TimerView extends Component {
  constructor(props) {
    super(props)
  }

  // Timer should have its name, time, and a start/stop Button (logic for this Button will be built out later)
  render() {

  // Extract these specific props to use in the component
  const { index, toggleTimer, timer } = this.props
    return (
      <View>
        <Text>{timer.name}</Text>
        <Text>{formatTime(timer.time)}</Text>
        <Button
          title = {timer.isRunning ? "Stop" : "Start"}
            // This calls our toggleTimer action on the specific timer (specified by the index)
            onPress={(e) => {
                toggleTimer(index)
            }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

// Use the toggleTimer action for this component
const mapDispatchToProps = () => {
  return { toggleTimer }
}
export default connect(mapStateToProps, mapDispatchToProps())(TimerView)