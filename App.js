import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.wrapperContent}>Async Storage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContent: {
    marginTop: 40,
    fontSize: 32,
    textAlign: 'center',
  },
});

export default App;
