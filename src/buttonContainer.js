import React from 'react';
import { View } from 'react-native';
import NumberButton from './numberButton';

const ButtonContainer = (props) => {

    const operators = ['+','-','*','/','=','C'];
    const NumberButtonsArray = [];

    populateArrays = (numberOfButtons) => {
        //populate the keypad with digits
        for (let i = 0; i< numberOfButtons; i++){
            NumberButtonsArray.push(<NumberButton number={i.toString()} onPress={props.onPress} key={i}/>);
        }
        //populate the keypad with operators
        for (let i = 0; i < operators.length; i++){
            NumberButtonsArray.push(<NumberButton number={operators[i].toString()} onPress={props.onPress} key={operators[i]}/>);
        }

        return NumberButtonsArray;
    }
    return (
        <View style={styles.containerStyle}>
            {populateArrays(10)}
            {/*<NumberButton number={'1'} onPress={props.onPress} />
            <NumberButton number={'2'} onPress={props.onPress} />
            <NumberButton number={'+'} onPress={props.onPress} />
            <NumberButton number={'='} onPress={props.onPress} />*/}

        </View>
    );
}

const styles = {
    containerStyle:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row'
    }
}
export default ButtonContainer;