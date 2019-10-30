import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';
import HeaderComp from "./HeaderComp";


export default function App() {

  return (
    <View style={styles.container}>
      <HeaderComp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
  },
});
