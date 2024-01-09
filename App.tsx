import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import Foot from './components/Foot'

export default function App() {

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <Head />
          <Body />
        </ScrollView>
        <Foot/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})