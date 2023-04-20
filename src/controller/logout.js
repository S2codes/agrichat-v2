import { useNavigation } from "@react-navigation/native";


const logout = async () => {
    const navigation = useNavigation()
    try {
        await AsyncStorage.setItem('user_token', null);
        await AsyncStorage.setItem('user_id', null);
        console.log("logout =--");
        navigation.navigate('Signupcategory')
    } catch (error) {
        console.log("error to stored");
        console.log(e);
    }
}

export default logout