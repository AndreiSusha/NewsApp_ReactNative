import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gStyles } from '../styles/style';

export default function Main() {
  return (
    <View style={gStyles.main}>
      <Text style={gStyles.title}>Main Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
