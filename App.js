import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
// Provider component makes Redux store available to any nested components wrapped in connect() function
import { update } from './actions';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Import Timer Components
import NewTimer from './components/new-timer';
import ListTimers from './components/list-timers';

// import {
//   Oswald_300Light,
//   Oswald_400Regular,
//   Oswald_500Medium,
//   Oswald_700Bold
// } from '@expo-google-fonts/oswald'

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// export default () => {
//   let [fontsLoaded] = useFonts({
//     Oswald,
//   });

// Create Store
const store = createStore(reducers);

// Update Timer every 50ms
let lastUpdateTime = Date.now();
setInterval(() => {
	const now = Date.now();
	const deltaTime = now - lastUpdateTime;
	lastUpdateTime = now;
	store.dispatch(update(deltaTime));
}, 50);

export default function All() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<SafeAreaView style={styles.safearea}>
					<View style={styles.headingContainer}>
						<Text style={styles.heading}>⏱️ Timers ⏱️</Text>
					</View>

					{/* define prodiver component to make Redux store available to any nested components that are wrapped in connect() function */}
					<View>
						{/* Timer Components */}
						<NewTimer />
						<ListTimers />
					</View>
				</SafeAreaView>
			</View>
		</Provider>
	);
}

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffe3e7',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headingContainer: {
		height: 65,
		backgroundColor: '#8ae3ba'
	},
	safearea: {
		flex: 1,
		width: '100%'
	},
	heading: {
		marginTop: 15,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		fontSize: 35,
		color: '#e7ff96'
	}
});
