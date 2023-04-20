import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native';

const SignUp = ({ navigation }) => {
    // const navigation = useNavigation() 
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Choose a Category</Text>
            <Text style={styles.titleDescrption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime </Text>
            <View style={styles.categoryList}>


                <TouchableOpacity style={styles.categoryItem} onPress={
                    () => { navigation.navigate("Signup", { userCategory: "Farmer" }) }
                } >
                    <Image resizeMode='contain' style={styles.CategoryImg} source={require('../../assets/farmer.png')} />
                    <Text style={styles.CategoryTitle}>Farmer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem} onPress={
                    () => { navigation.navigate("Signup", { userCategory: "Company" }) }
                } >
                    <Image resizeMode='contain' style={styles.CategoryImg} source={require('../../assets/company.png')} />
                    <Text style={styles.CategoryTitle}>Company</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem} onPress={
                    () => { navigation.navigate("Signup", { userCategory: "Manufacturer" }) }
                } >
                    <Image resizeMode='contain' style={styles.CategoryImg} source={require('../../assets/manf.png')} />
                    <Text style={styles.CategoryTitle}>Manufacturer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem} onPress={
                    () => { navigation.navigate("Signup", { userCategory: "Start Up" }) }
                } >
                    <Image resizeMode='contain' style={styles.CategoryImg} source={require('../../assets/startup.png')} />
                    <Text style={styles.CategoryTitle}>Start Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem} onPress={
                    () => { navigation.navigate("Signup", { userCategory: "Businessman" }) }
                } >
                    <Image resizeMode='contain' style={styles.CategoryImg} source={require('../../assets/businessman.png')} />
                    <Text style={styles.CategoryTitle}>Businessman</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem} onPress={
                    () => { navigation.navigate("Signup", { userCategory: "Student" }) }
                } >
                    <Image resizeMode='contain' style={styles.CategoryImg} source={require('../../assets/student.png')} />
                    <Text style={styles.CategoryTitle}>Student</Text>
                </TouchableOpacity>


            </View>


        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        padding: 11,
        backgroundColor: "#fff",
        height: "100%",
        paddingTop: 30
    },
    titleHeader: {
        fontSize: 22,
        marginBottom: 7,
        fontWeight: 800
    },
    titleDescrption: {
        color: "#656565",
        width: "90%",
        fontSize: 13
    },
    categoryList: {
        padding: 5,
        marginTop: 21,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    categoryItem: {
        borderRadius: 9,
        paddingVertical: 13,
        paddingHorizontal: 15,
        width: "48%",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 14

    },
    CategoryImg: {
        width: 60,
        height: undefined,
        aspectRatio: 1,
        marginBottom: 9
    },
    CategoryTitle: {
        fontSize: 21,
        fontWeight: 600,
    }



})