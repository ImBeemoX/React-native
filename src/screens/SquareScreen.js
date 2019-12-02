import React, {useState} from 'react';
import ColourCounter from '../components/ColourCounter'
import {View , Text, StyleSheet, Image, Button} from 'react-native'

const COLOUR_INCREMENT = 20

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColour = (colour, increment) => {
         if(colour + increment < 0 || colour + increment > 255 ){
             return
         }
         switch(colour){
             case "red":
                setRed(red + increment)
                return
             case "green":
                setGreen(green + increment)
                return
             case "blue":
               setBlue(blue + increment)
               return
             default:
               return
         }
    }
    
    return (
    <View>     
      <ColourCounter onIncrease={() => setColour("red", COLOUR_INCREMENT)} onDecrease={() => setColour("red", -1*COLOUR_INCREMENT)} colourName="Red"/> 
      <ColourCounter onIncrease={() => setColour("green", COLOUR_INCREMENT)} onDecrease={() => setColour("green", -1* COLOUR_INCREMENT)} colourName="Green"/>
      <ColourCounter onIncrease={() => setColour("blue", COLOUR_INCREMENT)} onDecrease={() => setColour("blue", -1*COLOUR_INCREMENT)} colourName="Blue"/>
      <View style = {{height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
    
    )
}

const styles = StyleSheet.create({})

export default SquareScreen