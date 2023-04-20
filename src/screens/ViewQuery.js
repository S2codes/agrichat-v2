import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReplyCard from '../component/ReplyCard';
import InputSection from '../component/InputSection';

import {Quaries} from "../../api/Quaries"

const ViewQuery = ({ route }) => {
    console.log("view qry ..");
    const queryId = route.params.queryId
    let communityBg = ""
    let userType = "Agiculture"
    switch (userType) {
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
 
    const fetchReply = () => {
        return Quaries.map(item => (
            // console.log(item.id)
            // <QueryCard key={item.id} data={item} />
            <ReplyCard key={item.id} data={item}/>
        ))
    }

    return (
        <View>
            <View style={styles.cardBody}>
                <View
                    style={[
                        styles.CommunitiySec,
                        { backgroundColor: communityBg }
                    ]
                    }>
                    <Text style={styles.CommunitiyPara}>community</Text>
                </View>
                <View style={styles.cardHedaing}>
                    <Text style={styles.userName}>Krish</Text>
                    <Text style={styles.userType}>Farmer</Text>
                </View>
                <Text style={styles.tStamp}>04/08/2023</Text>
                <View style={styles.cardContent}>
                    <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi in neque, aperiam ratione eaque expedita recusandae? </Text>
                </View>
            </View>

            <View style={styles.replyList}>
                <ScrollView style={styles.repliesContainer}>
                    <View style={styles.repliesSec}>
                        <Text style={styles.repliyTitle}>All Replies</Text>
                    </View>
                    {fetchReply()}
                </ScrollView>
            </View>
            <View style={styles.inputContainer}>
                <InputSection />
            </View>

        </View>
    )
}



const styles = StyleSheet.create({

    inputContainer: {
        height: 49,
        marginTop: 7,

    },


    cardBody: {
        width: "100%",
        paddingBottom: 9,
        paddingHorizontal: 0,
        backgroundColor: "#fff",
        borderRadius: 7,
        marginTop: 11,
        marginBottom: 8
    },
    CommunitiySec: {
        color: "#fff",
        width: "100%",
        // borderRadius: 7
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7

    },
    CommunitiyPara: {
        color: "#fff",
        marginLeft: 7,
        fontSize: 18,
        textTransform: "capitalize",

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
    replyList: {
        height: 330
    },

    repliesContainer: {
        paddingBottom: 23
    },
    repliesSec: {
        paddingHorizontal: 7,
        paddingVertical: 4,
        backgroundColor: "#285430"
    },
    repliyTitle: {
        fontSize: 18,
        fontWeight: 600,
        color: "white"
    },





})


export default ViewQuery
