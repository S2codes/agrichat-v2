import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommunityCard from '../component/CommunityCard'

const About = () => {
  const CommunityData = [
    {
      id: "1",
      color: "#56a6dc",
      title: "Fishery",
      img: require("../../assets/fish.png")
    },
    {
      id: "2",
      color: "#C9F4AA",
      title: "Agriculture",
      img: require("../../assets/agri.png")
    },
    {
      id: "3",
      color: "#ffcb37",
      title: "Business",
      img: require("../../assets/businessman.png")
    },
    {
      id: "4",
      color: "#6093b5",
      title: "Student",
      img: require("../../assets/student.png")
    },
    {
      id: "5",
      color: "#9966ff",
      title: "Start Up",
      img: require("../../assets/startup.png")
    },

  ]

  function fetchData() {
    return CommunityData.map(item => (
      (
        <CommunityCard key={item.id} data={item} />
      )
    ))

  }

  return (
    <View style={styles.container}>
      { fetchData() }
    </View>

  )
}

export default About

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "100%"
  }
})