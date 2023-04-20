import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QueryCard from '../component/QueryCard'
import { Quaries } from "../../api/Quaries"
import InputSection from '../component/InputSection'


const Community = ({ navigation, route }) => {
  const fetchQueries = () => {
    return Quaries.map(item => (
      <QueryCard key={item.id} data={item} />
    ))
  }
  return (
    <View>
      <ScrollView style={styles.quariesContainer}>
        {fetchQueries()}
      </ScrollView>
      <InputSection/>
    </View>
  )
}

const styles = StyleSheet.create({
  quariesContainer: {
    marginBottom: 40,
  }

})

export default Community
