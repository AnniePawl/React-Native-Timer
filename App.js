import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView } from 'react-native';
// Provider component makes Redux store available to any nested components wrapped in connect() function
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Import Timer Components 

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

export default function All() {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safearea}>
      <View style={styles.headingContainer}>
				<Text style={styles.heading}>Timers</Text>
        </View>


        {/* define prodiver component to make Redux store available to any nested components that are wrapped in connect() function */}
        <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            Tmrz
          </p>
        </div>
      </Provider>




			</SafeAreaView>
		</View>
	);
}

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor:'#ffe6ea',
		alignItems: 'center',
		justifyContent: 'center'
  },
  headingContainer: {
    height:60,
    backgroundColor:'#8ae3ba',
  },
	safearea: {
		flex: 1,
    width: '100%',
  }, 
  heading: {
    marginTop:15,
    fontWeight:'bold',
    textTransform:'uppercase',
    textAlign:'center',
    fontSize:35,
    color:'#ffe6ea',
   
  }

});
