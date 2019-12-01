import React, {useState} from 'react';
import ColourCounter from '../components/ColourCounter'
import {View , Text, StyleSheet, Image, Button} from 'react-native'

const COLOUR_INCREMENT = 10

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    
    return (
    <View>     
      <ColourCounter onIncrease={() => setRed(red + COLOUR_INCREMENT)} onDecrease={() => setRed(red - COLOUR_INCREMENT)} colourName="Red"/> 
      <ColourCounter onIncrease={() => setGreen(green + COLOUR_INCREMENT)} onDecrease={() => setGreen(green - COLOUR_INCREMENT)} colourName="Green"/>
      <ColourCounter onIncrease={() => setBlue(blue + COLOUR_INCREMENT)} onDecrease={() => setBlue(blue - COLOUR_INCREMENT)} colourName="Blue"/>
      <View style = {{height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
    
    )
}

const styles = StyleSheet.create({})

export default SquareScreen