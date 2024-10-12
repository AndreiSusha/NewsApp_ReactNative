import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { gStyles } from '../styles/style';

export default function FullInfo({ route }) {
  return (
    <View style={gStyles.main}>
      <Image
        style={styles.image}
        source={{
          uri: route.params.img,
        }}
      />
      <Text style={gStyles.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  full: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'mt-light',
    padding: 20,
    textAlign: 'center',
  },
});
