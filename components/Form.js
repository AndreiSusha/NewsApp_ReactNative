import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { gStyles } from '../styles/style';
import { Formik } from 'formik';

export default function Forms({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: '', anons: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Taip the name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder="Taip the anons"
              onChangeText={props.handleChange('anons')}
              value={props.values.anons}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Taip the article"
              onChangeText={props.handleChange('full')}
              value={props.values.full}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Put the image"
              onChangeText={props.handleChange('img')}
              value={props.values.img}
            />
            <Button title="Add" color="green" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
});
