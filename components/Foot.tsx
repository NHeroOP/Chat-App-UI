import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function footer() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.flexContainer}>
        <Image source={require('./img/account.png')} style={styles.Img}/>
        <Text> Account </Text>
      </View>
      <View style={styles.flexContainer}>
        <Image source={require('./img/chats.png')} style={styles.Img}/>
        <Text> Chats </Text>
      </View>
      <View style={styles.flexContainer}>
        <Image source={require('./img/calls.png')} style={styles.Img}/>
        <Text> Calls </Text>
      </View>
      <View style={styles.flexContainer}>
        <Image source={require('./img/settings.png')} style={styles.Img}/>
        <Text> Settings </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    backgroundColor: '#FFF',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
  },
  elevation: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 2,
  },
  Img: {
    height: 20,
    width: 20,
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})