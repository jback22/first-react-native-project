import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Symbols from "./Symbols";
import Numbers from "./Numbers";
import Operators from "./Operators";

function HeaderComp() {
    const [total, setTotal] = useState(0.0);
    const [screen, setScreen] = useState('');
    const [isNumb,setIsNumb] = useState(false);
    const [value,setValue] = useState();


    const Evaluate = () => {
        console.log('eva',screen);
        if (screen.length !== 0){
            try {
                let screen_array = screen.toString().split('');
                let last_element = screen_array[screen_array.length - 1];
                if (['(','+','*','-','/','%'].includes(last_element)){
                    screen_array.pop();
                    setTotal(eval(screen_array.join('')));
                    let temp = eval(screen_array.join(''));
                    setTotal(screen_array.join(''));
                    setScreen(temp);
                }
                else{
                    setTotal(eval(screen));
                    let temp = eval(screen);
                    setTotal(screen);
                    setScreen(temp);
                }
            }
            catch (e) {
                console.log(e);
                setScreen([])
            }
        }
    };
    const AddScreen = (value)=>{
            setValue(value);
    };
    useEffect(() => {
        if (value === '='){
            Evaluate()
        }else{
            setScreen(screen + value);
            setValue('')
        }

    },[value]);
    useEffect(() => {

        if (typeof screen !== "number"){
            console.log('Screen: ',screen,typeof screen,' Total: ',total);
            let screen_array = screen.toString().split('');
            let last_element = screen_array[screen_array.length - 1];
            let second_last_element = screen_array[screen_array.length - 2];
            if (isNaN(Number(last_element)) && last_element === second_last_element || (['+','-'].includes(second_last_element) && ['*','/','.','+','-'].includes(last_element))) {
                screen_array.pop();
                setScreen(screen_array.join(''))
            } else if (last_element === 'C') {
                setTotal(0);
                setScreen('');
            }
            setIsNumb(false);

        }
        else{
            setIsNumb(true);
            console.log(screen);
            console.log(total);
            if (isNumb){
                console.log(screen);
                let x = screen - eval(total) ;
                console.log(x);
                setScreen(x.toString());
                setIsNumb(false);
            }

        }



    }, [screen]);
    return (
        <View style={{marginLeft: 5, marginRight: 5}}>
            <Text style={{fontSize:22,color:'#EF3D75',fontWeight:'bold'}}>Calculator App</Text>
            <View style={styles.calculationBox}>
                <Text style={{textAlign: 'right', marginRight: 20, fontSize: 19}}>{total}</Text>
                <View>
                    <Text style={{textAlign: 'right', marginRight: 20, fontSize: 30}}>{screen}</Text>
                </View>
            </View>
            <View style={styles.containerflexcolumn}>
                <View style={{flexDirection:'row'}}>
                    <Symbols addToScreen={AddScreen}/>
                </View>
                <View style={styles.containerflexrow}>
                    <View style={{flex:3,flexDirection:'row-reverse',justifyContent:'center',flexWrap:'wrap'}}>
                        <Numbers evaluate={Evaluate} addToScreen={AddScreen}/>
                    </View>
                    <View style={{flex:1}}>
                        <Operators addToScreen={AddScreen}/>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default HeaderComp;


const styles = StyleSheet.create({
    calculationBox: {
        height: 100,
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 8,

    },
    containerflexrow: {
        flexDirection: 'row',
        marginTop: 5
    },
    containerflexcolumn:{
        flexDirection: 'column'
    }

});
