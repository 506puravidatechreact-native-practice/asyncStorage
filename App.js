import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputTextValue, saveInputTextValue] = useState('');
  const [nameStorage, saveNameStorage] = useState('');

  useEffect(() => {
    getDataFromStorage();
  }, []);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('name', inputTextValue);
      //console.log('saving ...  ' + inputTextValue);
      saveNameStorage(inputTextValue);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataFromStorage = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      //console.log('getting ...  ' + name);
      saveNameStorage(name);
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('name');
      saveNameStorage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapperContent}>
      {nameStorage ? <Text> Hola: {nameStorage} </Text> : null}
      <TextInput
        style={styles.input}
        placeholder={'Please write a name'}
        onChangeText={text => saveInputTextValue(text)}
      />

      <Button title="Save" color="#333" onPress={() => saveData()} />

      {nameStorage ? (
        <TouchableHighlight
          onPress={() => removeData()}
          style={styles.btnRemove}>
          <Text style={styles.text}>Remove Name &times;</Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContent: {
    marginTop: 40,
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  btnRemove: {
    backgroundColor: 'red',
    marginTop: 30,
    padding: 10,
  },
});

export default App;
