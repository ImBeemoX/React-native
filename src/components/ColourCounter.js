import React from 'react';
import {View , Text, StyleSheet, Image, Button} from 'react-native'

const ColourCounter = (props) => {
    return (
    <View>
       <Text>{props.colourName}</Text>
       <Button onPress = {() => props.onIncrease()} title={`Increase ${props.colourName}`}/>
       <Button onPress = {() => props.onDecrease()} title={`Decrease ${props.colourName}`}/>
    </View>
    
    )
}

const styles = StyleSheet.create({})

export default ColourCounter