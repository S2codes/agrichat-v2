import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import CheckBox from 'expo-checkbox'

import { fetchState, fetchDistict, fetchBlock } from '../controller/fetchLocation'
import { signupHandeler } from '../controller/signupHandeler'

import { getData, storeData } from '../controller/asyncStorage'
import { useNavigation } from '@react-navigation/native'


const SignUp = ({ route }) => {
  
  const navigation = useNavigation()

  const userType = route.params.userCategory

  const [states, setStates] = useState()
  const [districts, setDistricts] = useState()
  const [blocks, setBlocks] = useState()

  // fetch state 
  const fetchStateDetails = async () => {
    const s = await fetchState();
    setStates(s)
  }
  // fetch districts 
  const fetchDistricts = async (stateId) => {
    const d = await fetchDistict(stateId);
    setDistricts(d)
  }
  // fetch blocks 
  const fetchBlocks = async (districId) => {
    const b = await fetchBlock(districId);
    setBlocks(b)
  }


  useEffect(() => {
    fetchStateDetails()
  }, [])


  // dropdown 
  const [isClicked, setIsClicked] = useState(false)
  const [selectState, setSelectState] = useState("Select Your State")

  const [isDistrictClicked, setIsDistrictClicked] = useState(false)
  const [selectDistrict, setSelectDistrict] = useState("Select Your District")

  const [isBlockClicked, setIsBlockClicked] = useState(false)
  const [selectBlock, setSelectBlock] = useState("Select Your Block")

  const stateRef = useRef(null)
  const districtRef = useRef(null)
  const blockRef = useRef(null)

  const [name, setName] = useState(null)
  const [contact, setContact] = useState(null)
  const [email, setEmail] = useState(null)
  const [state, setState] = useState(null)
  const [district, setDistrict] = useState(null)
  const [block, setBlock] = useState(null)
  const [password, setPassword] = useState(null)

  const [isShow, setIsShow] = useState(true)
  
  const [isChecked, setIsChecked] = useState(false)


  const submitHandeler = async () => {
    console.log("submit");
    console.log(name);
    if (name == null || contact == null || email == null || state == null || district == null || block == null || password == null) {
      Alert.alert("Invalid", "Please Fill the all fiels Correctly")
    } else {
      console.log("from is submited...");
      const signupResponse = await signupHandeler({ name, userType, contact, email, state, district, block, password })
      console.log("sign up response ----");
      const user_token = signupResponse.data[0].token
      const user_id = signupResponse.data[0].id
      storeData(user_token, user_id)
      // const asyncStroreResponse = getData()
      // console.log("get stored data");
      // console.log(asyncStroreResponse );
      
      navigation.navigate("Signin")


    }

  }



  return (
    <SafeAreaView style={{ flex: 1 }}>

      <KeyboardAvoidingView>
        <ScrollView style={{ flexGrow: 1 }}
          nestedScrollEnabled={true}>

          <View style={styles.secContainer}>

            <Text style={styles.headerMain}>Create An Account</Text>
            <Text style={styles.headerSubMain}>as a {userType}</Text>


            <View style={styles.formContainer}>



              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} placeholder='Enter Your Name' value={name} onChangeText={(username) => {
                  setName(username)
                }} />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Contact Number</Text>
                <TextInput style={styles.input} keyboardType='numeric' placeholder='Enter Your Contact Number' value={contact} onChangeText={(usercontact) => {
                  setContact(usercontact)
                }} />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder='Enter Your Email Address' value={email} onChangeText={(useremail) => {
                  setEmail(useremail)
                }} />
              </View>

              {/* =========State dropdown=========  */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>State</Text>
                <TouchableOpacity style={styles.dropdown} onPress={() => {
                  setIsClicked(!isClicked)
                  setIsDistrictClicked(false)
                  setIsBlockClicked(false)
                }}>
                  <Text>{selectState}</Text>
                  {isClicked ? (
                    <Image source={require("../../assets/icons/arrow-up.png")} style={styles.dropdownIcon} />
                  ) : (
                    <Image source={require("../../assets/icons/arrow-down.png")} style={styles.dropdownIcon} />
                  )}

                </TouchableOpacity>

                {/* dropdown area  */}
                {isClicked ? <View style={styles.dropDownArea}>

                  {
                    states.map((item) => {
                      return <TouchableOpacity key={item.id} style={styles.dropdownItem} onPress={() => {
                        setSelectState(item.state)
                        stateRef.current = item.state
                        setState(item.id)
                        setSelectDistrict("Select Your District")
                        setIsClicked(false)
                      }}>
                        {<Text>{item.state}</Text>}
                      </TouchableOpacity>

                    })
                  }
                </View> : null}
              </View>

              {/* =========District dropdown=========  */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>District</Text>
                <TouchableOpacity style={styles.dropdown} onPress={async () => {
                  if (stateRef.current == null) {
                    setSelectDistrict("Select State First")
                  } else {
                    await fetchDistricts(state)
                    setIsDistrictClicked(!isDistrictClicked)
                    setIsClicked(false)
                    setIsBlockClicked(false)
                  }
                }}>
                  <Text>{selectDistrict}</Text>
                  {isDistrictClicked ? (
                    <Image source={require("../../assets/icons/arrow-up.png")} style={styles.dropdownIcon} />
                  ) : (
                    <Image source={require("../../assets/icons/arrow-down.png")} style={styles.dropdownIcon} />
                  )}

                </TouchableOpacity>

                {/* dropdown area  */}
                {isDistrictClicked ? <View style={styles.dropDownArea}>

                  {
                    districts.map((item) => {
                      return <TouchableOpacity key={item.id} style={styles.dropdownItem} onPress={() => {
                        setSelectDistrict(item.district)
                        districtRef.current = item.district
                        setDistrict(item.id)
                        setIsDistrictClicked(false)
                        setSelectBlock("Select Your Block")
                      }}>
                        <Text>{item.district}</Text>
                      </TouchableOpacity>

                    })

                  }



                </View> : null}
              </View>

              {/* =========Block dropdown=========  */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Block</Text>

                <TouchableOpacity style={styles.dropdown} onPress={async () => {
                  if (districtRef.current == null) {
                    setSelectBlock("Select District First")
                  } else {
                    await fetchBlocks(district)
                    setIsBlockClicked(!isBlockClicked)
                    setIsDistrictClicked(false)
                    setIsClicked(false)
                  }

                }}>
                  <Text>{selectBlock}</Text>
                  {isBlockClicked ? (
                    <Image source={require("../../assets/icons/arrow-up.png")} style={styles.dropdownIcon} />
                  ) : (
                    <Image source={require("../../assets/icons/arrow-down.png")} style={styles.dropdownIcon} />
                  )}

                </TouchableOpacity>

                {/* dropdown area  */}
                {isBlockClicked ? <View style={styles.dropDownArea}>

                  {
                    blocks.map((item) => {
                      return <TouchableOpacity key={item.id} style={styles.dropdownItem} onPress={() => {
                        setSelectBlock(item.block)
                        blockRef.current = item.block
                        setBlock(item.id)
                        setIsBlockClicked(false)
                      }}>
                        <Text>{item.block}</Text>
                      </TouchableOpacity>

                    })
                  }



                </View> : null}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passowordGroup}>
                  <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} secureTextEntry={isShow ? true : false} placeholder='Enter Your Password' value={password} onChangeText={(userPassword) => {
                    setPassword(userPassword)
                  }} />

                  <TouchableOpacity onPress={() => {
                    setIsShow(!isShow)
                  }} >
                    {
                      isShow ? (<Image style={styles.togglePasswordBtn} source={require("../../assets/icons/show.png")} />)
                        : (<Image style={styles.togglePasswordBtn} source={require("../../assets/icons/hidden.png")} />)
                    }

                  </TouchableOpacity>

                </View>
              </View>

              <View style={styles.checkBoxGroup}>

                <CheckBox value={isChecked} onValueChange={() => {
                  setIsChecked(!isChecked)
                }} />
                <Text style={styles.checkBoxLabel}>I have already read and agreed with T&c.</Text>
              </View>


            </View>

            <TouchableOpacity style={[styles.signupBtn, {
              backgroundColor: isChecked ? "#5D9C59" : "grey"
            }]}
              disabled={!isChecked}
              onPress={() => {
                submitHandeler()
              }}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>


            <View style={styles.loginOption}>
              <Text style={styles.para}>Already have an Account ? </Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Signin", {
                  userCategory: userType
                })
              }} >
                <Text style={styles.link}>Sign In</Text>
              </TouchableOpacity>
            </View>


          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default SignUp

const styles = StyleSheet.create({

  passowordGroup: {
    flex: 1
  },
  togglePasswordBtn: {
    position: "absolute",
    right: 9,
    bottom: 5,
    alignItems: 'stretch',
    width: 33,
    height: 33

  },

  dropdown: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  dropDownArea: {
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
    paddingBottom: 10

  },
  searchInput: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 15
  },
  dropdownItem: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center"
  },

  checkBoxGroup: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  checkBoxLabel: {
    marginLeft: 15,
  },




  secContainer: {
    height: "100%",
    padding: 11,
    paddingTop: 20,
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