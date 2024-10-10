import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { gStyles } from '../styles/style';

export default function Contacts({ navigation }) {
  const loadScene = () => {
    navigation.goBack();
    console.log('go back to Main');
  };
  return (
    <View style={gStyles.main}>
      <Text style={gStyles.title}>Contact info</Text>
      <Button title="Go to Contacts" onPress={loadScene} />
    </View>
  );
}

const styles = StyleSheet.create({});
