import React, {useReducer} from 'react';
import ColourCounter from '../components/ColourCounter'
import {View , Text, StyleSheet, Image, Button} from 'react-native'

const COLOUR_INCREMENT = 20

const reducer = (state, action) =>{
    switch(action.colourToChange){
        case 'red':
            return {...state, red: state.red + action.increment}
        case 'green':
            return {...state, green: state.green + action.increment}
        case 'blue':
            return {...state, blue: state.blue + action.increment}
        default:
            return state
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    
    return (
    <View>     
      <ColourCounter onIncrease={() => dispatch({colourToChange : 'red', increment: COLOUR_INCREMENT})} onDecrease={() => dispatch({colourToChange : 'red', increment: -1*COLOUR_INCREMENT})} colourName="Red"/> 
      <ColourCounter onIncrease={() => dispatch({colourToChange : 'green', increment: COLOUR_INCREMENT})} onDecrease={() => dispatch({colourToChange : 'green', increment: -1*COLOUR_INCREMENT})} colourName="Green"/>
      <ColourCounter onIncrease={() => dispatch({colourToChange : 'blue', increment: COLOUR_INCREMENT})} onDecrease={() => dispatch({colourToChange : 'blue', increment: -1*COLOUR_INCREMENT})} colourName="Blue"/>
      <View style = {{height: 150, width:150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
    </View>
    
    )
}

const styles = StyleSheet.create({})

export default SquareScreen