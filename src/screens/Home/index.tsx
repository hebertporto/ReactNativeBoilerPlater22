import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@app/theme';

const Home = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.body}>Boiler plate prototype</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...theme.containers.mainCentered(),
  },
  title: {
    ...theme.text.title(),
  },
  body: {
    ...theme.text.body(),
  },
});

export { Home };
