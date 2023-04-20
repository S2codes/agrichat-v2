import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const First = ({navigation}) => {
    console.log(navigation);
    return (
        <SafeAreaView>
            <View style={styles.conatiner}>
                <View style={styles.topView}>
                    <Text style={styles.topPara}>Welcome</Text>
                    <Image style={styles.logo} source={require("../../assets/logo.png")} />
                    <Text style={styles.topPara}>Agrichat</Text>
                    <Text style={styles.topTagLine}>Help each other - grow together</Text>
                </View>

                <View style={styles.midSection}>
                    <Text style={styles.label}>New User ?</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        navigation.navigate('Signupcategory')
                    }}>
                        <Text style={styles.btnText}>SIGN UP</Text>
                    </TouchableOpacity>

                    <Text style={styles.label}>Already have an Account ?</Text>
                    <TouchableOpacity style={styles.btn} onPress={()=>{
                           navigation.navigate('Signin')
                    }}>
                        <Text style={styles.btnText}>SIGN IN</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.midSection}>
                    <Image style={styles.map} source={require("../../assets/Indiamap.png")} />
                    <Text style={styles.madein}>Made in India</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    conatiner: {
        backgroundColor: "#9efcfc",
        height: "100%",
        paddingVertical: 30
    },
    topView: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    topPara: {
        color: "#26af4d",
        fontSize: 21,
        marginBottom: 10
    },
    logo: {
        width: 70,
        height: undefined,
        aspectRatio: 1
    },
    topTagLine: {
        color: "#85011c",
        fontSize: 21
    },
    midSection: {
        // borderWidth: 2,
        // borderColor: "red",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // marginVertical: 20
    },
    label: {
        fontSize: 20,
        marginBottom: 10
    },
    btn: {
        backgroundColor: "#00a3e8",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 13
    },
    btnText: {
        fontSize: 18,
        letterSpacing: 1
    },
    map: {
        marginTop: 7,
        width: "45%",
        height: undefined,
        aspectRatio: 1
    },
    madein: {
        fontSize: 19,
        textAlign: "center",
        // fontStyle: "italic"
    }

})

export default First
