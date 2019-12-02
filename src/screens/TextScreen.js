import React, {useState} from 'react';
import {View , Text, StyleSheet, Image, Button, TextInput} from 'react-native'


const TextScreen = () => {
    const [name, setName] = useState('')

    
    return (
    <View> 
      <Text>Enter Password</Text>  
      <TextInput style = {styles.input} autoCapitalize="none" autoCorrect={false} value = {name} onChangeText={(newvalue)=> setName(newvalue)}></TextInput>
       {name.length > 5? <Text>lol</Text> : null}
    </View>
    
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15, borderColor: 'black', borderWidth: 1, height: 50
    }
})

export default TextScreen