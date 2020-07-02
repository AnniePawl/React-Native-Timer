
```javascript 
import React from 'react';
import {StyleSheet, Text, }

export default function App() {
  <View style = {styles.container}>   
   <View style = {style.square}></View>
   <View style = {style.square}></View>
   <View style = {style.square}></View>
   <View style = {style.square}></View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    display:flex, 
  }, 
  square: {
    height: 50px, 
    width: 50px,
    border: 1px solid black,

  }
})


```

