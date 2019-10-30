import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
const areEqual = (prevProps, nextProps) => {
    return (prevProps.title === nextProps.title)
};
const memoop=React.memo(function Operators(props) {

    const operators = ['+', '*', '-', '/'];
    console.log('operators');

    return operators.map((operator) => {
        return (
            <TouchableOpacity key={operator} style={styles.boxop} onPress={() => props.addToScreen( operator)}>
                <Text style={styles.number}>{operator}</Text>
            </TouchableOpacity>
        )
    })
},areEqual);

export default memoop;

const styles = StyleSheet.create({
    number: {
        textAlign: 'center',
        fontSize: 30,
        color: '#202124'
    },
    boxop: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        borderColor: '#f1f3f4',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#dfe1e5',
    }

});
