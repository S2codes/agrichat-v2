import AsyncStorage from '@react-native-async-storage/async-storage'

// async storage 
export const storeData = async (token, id) => {
    try {
        await AsyncStorage.setItem('user_token', token);
        await AsyncStorage.setItem('user_id', id);
        console.log("token stored----");
    } catch (error) {
        console.log("error to stored");
        console.log(e);
    }
}


export const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('user_token')
        const id = await AsyncStorage.getItem('user_id')
        if (token !== null) {
            console.log(" tooken found");
            // console.log(token);
            // const response =  {
            //     isLogged: true,
            //     userToken: token,
            //     userId: id
            // };
        }

        return token
    } catch (e) {
        console.log("asunc storage error");
        console.log(e);
    }
}

