import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function body() {
  const contacts = [
    {
      uid: 1,
      name: 'Lily Johnson',
      status: 'Exploring new horizons 🌍',
      imageUrl: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
      uid: 2,
      name: 'Ethan Reynolds',
      status: 'Coding the next big thing 💻',
      imageUrl: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    {
      uid: 3,
      name: 'Mia Turner',
      status: 'Chasing dreams and sunsets 🌅',
      imageUrl: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      uid: 4,
      name: 'Oliver Brooks',
      status: 'Coffee enthusiast and code breaker ☕',
      imageUrl: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
      uid: 5,
      name: 'Ava Simmons',
      status: 'Lost in a good book 📚',
      imageUrl: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
    {
      uid: 6,
      name: 'Noah Foster',
      status: 'Seeking adventures and adrenaline 🏞️',
      imageUrl: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
      uid: 7,
      name: 'Isabella Reed',
      status: 'Creating art and magic ✨🎨',
      imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg'
    },
    {
      uid: 8,
      name: 'Lucas Baker',
      status: 'Rocking the world, one song at a time 🎸🤘',
      imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    {
      uid: 9,
      name: 'Grace Taylor',
      status: 'Making every moment count ⏳',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
      uid: 10,
      name: 'Aiden Parker',
      status: 'Living life one line of code at a time 💾',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  ]
  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid}>
            <View style={styles.userCard}>
              <Image
                source={{
                  uri: imageUrl
                }}
                style={styles.userImg}
                />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
              <View style={styles.time}>
                <Text>11:59</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: '20%'}}></View>
              <View style={{width: '80%', borderWidth: 0.5, borderColor: "#BFBFBF"}}></View>
            </View>
          </View>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 64,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    // backgroundColor: '#F3CC79',
    padding: 4,
    borderRadius: 12,
  },
  userImg: {
    height: 60,
    width: 60,
    borderRadius: 60/2,
    marginRight: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
    fontWeight: '200',
  },
  time: {
    flex: 1, 
    alignItems: 'flex-end',
  }
})