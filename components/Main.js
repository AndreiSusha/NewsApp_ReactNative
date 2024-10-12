import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import { gStyles } from '../styles/style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Form from './Form';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google news',
      full: 'Google week news',
      key: '1',
      img: 'https://images.unsplash.com/photo-1592096304832-62463bfdc822?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Apple',
      anons: 'Apple news',
      full: 'Apple week news',
      key: '2',
      img: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww',
    },
    {
      name: 'FaceBook',
      anons: 'FaceBook news',
      full: 'FaceBook week news',
      key: '3',
      img: 'https://images.unsplash.com/photo-1549813069-f95e44d7f498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Amazon',
      anons: 'Amazon news',
      full: 'Amazon week news',
      key: '4',
      img: 'https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);
  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };

  return (
    <View style={gStyles.main}>
      <Modal visible={modalWindow}>
        <View style={gStyles.main}>
          <MaterialCommunityIcons
            name="close-circle"
            size={26}
            color="red"
            style={styles.icon}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Add your news</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <MaterialIcons
        name="add-circle"
        size={26}
        color="blue"
        style={styles.icon}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyles.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('FullInfo', item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    marginBottom: 30,
    width: '100%',
  },
  title: {
    fontSize: 22,
    color: '#474747',
    fontFamily: 'mt-bold',
    textAlign: 'center',
    marginTop: 20,
  },
  anons: {
    fontSize: 16,
    color: '#474747',
    fontFamily: 'mt-light',
    textAlign: 'center',
    marginTop: 5,
  },
});
