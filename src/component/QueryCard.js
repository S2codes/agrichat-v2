import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const QueryCard = (props) => {
    const data = props.data
    let communityBg = ""
    switch (props.data.community) {
        case "Agiculture":
            communityBg = "#5D9C59"
            break;
        case "Fishery":
            communityBg = "#56a6dc"
            break;
        case "Business":
            communityBg = "#ffcb37"
            break;
        case "Startup":
            communityBg = "#9966ff"
            break;
    }

    const navigation = useNavigation()
    
    return (
        <View style={styles.cardBody}>
            <View 
            style={[
                styles.CommunitiySec,
                {backgroundColor: communityBg}
            ]
            }>
                <Text style={styles.CommunitiyPara}>{props.data.community}</Text>
                <Text style={styles.JoinBtn}>Join</Text>
            </View>
            <View style={styles.cardHedaing}>
                <Text style={styles.userName}>{data.user}</Text>
                <Text style={styles.userType}>{data.type}</Text>
            </View>
            <Text style={styles.tStamp}>{data.stamp}</Text>
            <View style={styles.cardContent}>
                <Text style={styles.para}>{data.query}</Text>
            </View>
            <View style={styles.cardFooter}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("View", {
                        queryId: props.data.id
                    })
                }}>
                <Text style={styles.cardCta}>View Details</Text>
                </TouchableOpacity>

                <Text style={styles.cardCta}>Replies</Text>
                <Text style={styles.cardDeleteCta}>Delete</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    cardBody: {
        width: "100%",
        paddingBottom: 9,
        paddingHorizontal: 0,
        backgroundColor: "#fff",
        borderRadius: 7,
        marginTop: 11,
        marginBottom: 13        
    },
    CommunitiySec: {
        color: "#fff",
        width: "100%",
        // borderRadius: 7
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingVertical: 3
    },
    CommunitiyPara: {
        color: "#fff",
        marginLeft: 7,
        fontSize: 18,
        textTransform: "capitalize",

    },
    JoinBtn: {
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 2,
        paddingHorizontal: 10,
        // paddingTop: 0,
        // paddingBottom: 2,
        marginRight: 7,
        fontSize: 14
    },
    cardHedaing: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 7,
        marginTop: 3
    },
    userName: {
        fontSize: 17,
        fontWeight: 600,
        color: "#22333b"
    },
    userType: {
        color: "#fff",
        backgroundColor: "#9d4edd",
        borderRadius: 7,
        color: "#fff",
        paddingHorizontal: 7,
        paddingTop: 0,
        paddingBottom: 2,
        marginLeft: 5,
        fontSize: 10
    },
    tStamp: {
        marginLeft: 5,
        fontSize: 11,
        color: "#656565"
    },
    cardContent: {
        paddingHorizontal: 7,
        paddingVertical: 4
    },
    para: {
        color: "#504A4B",
        lineHeight: 20,
        fontSize: 14
    },
    cardFooter: {
        borderTopColor: "#E9E8E8",
        borderTopWidth: 1,
        paddingTop: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    cardCta: {
        color: "#fff",
        borderRadius: 23,
        backgroundColor: "#5D9C59",
        paddingHorizontal: 13,
        paddingVertical: 5

    },
    cardDeleteCta: {
        color: "#fff",
        borderRadius: 23,
        backgroundColor: "red",
        paddingHorizontal: 13,
        paddingVertical: 5

    }




})

export default QueryCard
