import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
      <Text>This is my first app</Text>
      <Button title='Change me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
