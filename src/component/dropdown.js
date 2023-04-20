

// const [select, setSelect] = useState("Select State")
// const [isClicked, setIsClicked] = useState(false)
// const [data, setData] = useState(states)
// const searchRef = useRef("")
// const onSearch = (txt) => {
//   console.log("search..");
//   console.log(txt);

//   if (txt != "") {
//     let tempData = data.filter(item => {
//       console.log("search state......");
//       console.log(item.state.toLowerCase());
//       // console.log(item.state.toLowerCase().indexOf(txt.toLowerCase()));
//       // return item.state.toLowerCase().indexOf(txt.toLowerCase()) > -1
//     })
//     console.log("temp data");
//     console.log(tempData);
//     setData(tempData)
//   }

//   setData(states)

// }








// <TouchableOpacity style={styles.dropdown} onPress={() => {
//     setIsClicked(!isClicked)
//   }}>
//     <Text>{select}</Text>
//     {isClicked ? (
//       <Image source={require("../../assets/icons/arrow-up.png")} style={styles.dropdownIcon} />
//     ) : (
//       <Image source={require("../../assets/icons/arrow-down.png")} style={styles.dropdownIcon} />
//     )}

//   </TouchableOpacity>

//   {/* dropdown area  */}
//   {isClicked ? <View style={styles.dropDownArea}>
//     <TextInput placeholder='Search' style={styles.searchInput} ref={searchRef} onChange={(search)=> {
//       console.log("search.....--");
//       console.log(search);
//     } } />
//     <View>
//       <FlatList data={data} renderItem={({ item, index }) => {
//         // console.log(index);
//         return (
//           <TouchableOpacity style={styles.dropdownItem} onPress={() => {
//             console.log(item.state);
//             setSelect(item.state)
//             onSearch("")
//             setIsClicked(false)
//             searchRef.current.clear()
//           }}>
//             <Text>{item.state}</Text>
//           </TouchableOpacity>
//         )
//       }} />
//     </View>
//   </View> : null}
