import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { gStyles } from '../styles/style';

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate('Contacts');
    console.log('Load Contacts');
  };

  return (
    <View style={gStyles.main}>
      <Text style={gStyles.title}>Main Page</Text>
      <Button title="Go to Contacts" onPress={loadScene} />
    </View>
  );
}

const styles = StyleSheet.create({});
