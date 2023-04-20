import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CommunityCard = (props) => {

    const navigation = useNavigation()
    const item = props.data
    
    return (
        <TouchableOpacity 
        style={[styles.communityCardStyle,
            { backgroundColor: item.color }
        ]} onPress={
            () => {
                console.log("cm card");
                navigation.navigate("Community", {
                    Communityname: item.title
                })
            }
        }>
            <View >
                <Image resizeMode='contain'
                    style={styles.Icon}
                    source={item.img} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    Icon: {
        width: "50%",
        height: undefined,
        aspectRatio: 1
    },
    title: {
        fontSize: 16,
        letterSpacing: 1
    },
    communityCardStyle: {
        width: "32%",
        // borderColor: "blue",
        // borderWidth: 2,
        borderRadius: 13,
        padding: 7,
        // backgroundColor: "#C9F4AA",  
        display: "flex",
        alignItems: "center",
        marginTop: 10
        // 56a6dc
    }
})

export default CommunityCard