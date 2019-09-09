import React from 'react';
import { StyleSheet, View } from 'react-native';
import Test1 from '../src';

const App = () => (
  <View style={styles.container}>
    <Test1 />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
