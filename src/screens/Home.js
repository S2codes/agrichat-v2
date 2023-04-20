import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import QueryCard from '../component/QueryCard'
import { Quaries } from '../../api/Quaries'


const Home = () => {


  const fetchQueries = () => {
    return Quaries.map(item => (
      <QueryCard key={item.id} data={item} />
    ))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.conatiner}>
        <View >
          {fetchQueries()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#E4DCCF"
  }
})

export default Home