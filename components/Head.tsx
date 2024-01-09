import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function header() {
  return (
    <View style={styles.container}>
      <Image
      source={require("./img/menu.png")}
      style={[styles.Img, styles.menu]}
      />
      <View>
        <Text style={styles.headText}>CHAT</Text>
      </View>
      <Image
      source={require("./img/search.png")}
      style={[styles.Img, styles.search]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingBottom: 38,
    height: 100,
    elevation: 4,
  },
  Img: {
    height: 22,
    width: 22,
  },
  menu: {
    marginLeft: 20,
  },
  headText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 24
  },
  search: {
    marginRight: 20,
  },
})