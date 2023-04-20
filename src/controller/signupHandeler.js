import axios from "axios";

export const signupHandeler = async (signupDetails) => {
    console.log(signupDetails);
    try {
        const response = await axios.post('https://odishakrushi.in/agrichatapp/api/user/signup?api_key=20882528c754f848c7as0Ss', {
            name: signupDetails.name,
            state: signupDetails.state,
            district: signupDetails.district,
            block: signupDetails.block,
            mobile: signupDetails.contact,
            email: signupDetails.email,
            password: signupDetails.password,
            userType: signupDetails.userType
        })
        console.log("sign up handerler ..");
        console.log(response.data);
        return response.data

    } catch (error) {
        console.log(error);
    }
}

