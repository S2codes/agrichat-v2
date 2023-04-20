import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData, storeData } from '../controller/asyncStorage'

const SignIn = ({ navigation }) => {

    const [token, setToken] = useState(null)

    const isLoggedIn = async () => {
        const data = await getData()
        setToken(data);
        if (token !== null) {
            navigation.navigate('Index')
        }
    }


    useEffect(() => {
        console.log("....||||----in login.....");
        isLoggedIn()
    }, [])





    // const userType = route.params.userCategory
    return (
        <View style={styles.secContainer}>
            <Text style={styles.headerMain}>Sign In to Your Account</Text>

            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text>{token}</Text>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='Enter Your Email' />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter Your Password' />
                </View>
            </View>
            <TouchableOpacity style={styles.signupBtn} onPress={() => {
                navigation.navigate("Index")
            }}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.loginOption} >
                <Text style={styles.para}>Don't have an Account ? </Text>
                <TouchableOpacity onPress={
                    () => {
                        navigation.navigate("Signupcategory")

                    }
                }>
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    secContainer: {
        height: "100%",
        padding: 11,
        paddingTop: 30

    },
    headerMain: {
        fontSize: 21,
        fontWeight: 800
    },
    headerSubMain: {
        fontSize: 18,
        fontWeight: 800
    },
    formContainer: {
        marginTop: 20,
        marginBottom: 30
    },
    inputGroup: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 2
    },
    input: {
        borderWidth: 0.5,
        borderColor: "#8e8e8e",
        paddingVertical: 7,
        paddingHorizontal: 8,
        borderRadius: 7
    },
    signupBtn: {
        backgroundColor: "#5D9C59",
        paddingVertical: 15
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    },
    loginOption: {
        marginTop: 11,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    para: {
        color: "#656565",
        fontSize: 16
    },
    link: {
        fontSize: 18,
        color: "#007bff",
        marginLeft: 4
    }


})


export default SignIn
