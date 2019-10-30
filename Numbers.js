import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";


const areEqual = (prevProps, nextProps) => {
    return (prevProps.title === nextProps.title)
};
const memonumb = React.memo(function Numbers(props) {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, '=', '0', '.'];
    console.log('numbers');
    return (
        numbers.map((numb) => {
            return (
                <TouchableOpacity key={numb} style={styles.boxnumb}
                                  onPress={() => props.addToScreen(numb)}>
                    {numb === '=' ?
                        <Text style={{textAlign: 'center', fontSize: 24, color: 'blue'}}>{numb}</Text>
                        :
                        <Text style={styles.number}>{numb}</Text>
                    }
                </TouchableOpacity>
            )
        }))
},areEqual);
export default memonumb;

const styles = StyleSheet.create({

    number: {
        textAlign: 'center',
        fontSize: 30,
        color: '#202124'
    },
    boxnumb: {
        width: '30%',
        height: '21%',
        borderColor: '#dfe1e5',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#f1f3f4',
    }
});
