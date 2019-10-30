import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import HeaderComp from "./HeaderComp";


export default function App() {

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safearea}>
                <Text></Text>
            </SafeAreaView>
            <HeaderComp/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safearea: {
        backgroundColor:'#EF3D75'
    }
});
