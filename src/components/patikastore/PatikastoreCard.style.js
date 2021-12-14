import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    card_container:{
        backgroundColor: '#efefef',
    },
    image:{
        height: Dimensions.get('window').height/2,
        width: Dimensions.get('window').width/2,
        margin:20,
        borderRadius:10,
        

    },
    image_container:{
        backgroundColor:'white',
        height:500,
        margin:20,
        borderRadius:10,
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        
      },
    price:{
        color:'grey',
        fontWeight:'bold',
        fontSize:20,},
    inStock:{
        color:'red',
        fontWeight:'bold',
        fontSize:20,
    },
    searchBar:{
        backgroundColor:'white',
    }
}
)