import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReplyCard = (prpos) => {
    const replyData = prpos.data
    return (
        <View style={styles.replyCard}>
            <View style={styles.cardHedaing}>
                <Text style={styles.userName}>{replyData.user}</Text>
                <Text style={styles.userType}>{replyData.type}</Text>
            </View>
            <Text style={styles.tStamp}>{replyData.stamp}</Text>
            <View style={styles.replyContainer}>
                <Text style={styles.para}>
                    {replyData.query}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    replyCard: {
        padding: 9,
        marginBottom: 9,
        backgroundColor: "#fff"
    },
    cardHedaing: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // marginLeft: 7,
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
    replyContainer: {
        borderLeftColor: "#AA77FF",
        borderLeftWidth: 2.4,
        paddingLeft: 7,
        marginTop: 4
    },
    para: {
        color: "#504A4B",
        lineHeight: 17,
        fontSize: 14
    }

})

export default ReplyCard
