import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const InputSection = () => {
    return (
        <View style={styles.inputSec}>
            <TextInput autoCapitalize='none' multiline autoCorrect={false}
                placeholder='Write Your Question' style={styles.input} />

            <TouchableOpacity style={styles.sendBtn}>
                <Ionicons name="send" size={32} color="green" />
            </TouchableOpacity>
        </View>
    )
}

export default InputSection

const styles = StyleSheet.create({
    inputSec: {
        backgroundColor: "#fff",
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    input: {
        paddingVertical: 9,
        paddingHorizontal: 7,
        width: "86%"

    },
    sendBtn: {
        paddingHorizontal: 11,
        paddingVertical: 7,
        height: "100%",
        alignSelf: "flex-start",
        justifyContent: "center",
        position: "absolute",
        right: 0,
        top: 0

    }

})