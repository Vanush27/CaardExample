import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.top_bar_container}>
      <View style={styles.top_bar_button}>
        <Button title="Cancel" />
      </View>
      <Text style={styles.top_bar_title}>Add New Wallet</Text>
      <View style={styles.top_bar_button}>
        <Button title="Save" />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  top_bar_container: {
    flex: 1,
    marginTop: 30,
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  top_bar_button: {
    fontFamily: 'nunito',
    fontWeight: '400',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'right',
    color: '#404CB3',
    margin: 9,
  },
  top_bar_title: {
    fontFamily: 'nunito-bold',
    fontWeight: '700',
    fontSize: 20,
    color: '#3D6670',
  },
});
