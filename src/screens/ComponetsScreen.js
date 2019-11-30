import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    const greeting = <Text style={styles.lol}>I hate cod players</Text>
      return <View>
                      <Text style={styles.textStyle}>Get started with react native</Text>
                       {greeting}
            </View>
      
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 45
        },

        lol:{
            fontSize: 20
        }
    }
);

export default ComponentsScreen;