import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {

  
  return (
  <View>
    <Text style={styles.text}>Hello this is my first react.native project :)</Text>
    <Button onPress={() => navigation.navigate('Component')} title='Component'/>
    <Button onPress={() => navigation.navigate('List')} title='List'/>
    <Button onPress={() => navigation.navigate('Image')} title='Image'/>
    <Button onPress={() => navigation.navigate('Counter')} title='Counter'/>
    <Button onPress={() => navigation.navigate('Colour')} title='Colour'/>
    <Button onPress={() => navigation.navigate('Square')} title='Square'/>
  </View>
        )
 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
