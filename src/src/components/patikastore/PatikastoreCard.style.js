import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    card_container:{
        backgroundColor: '#efefef',
        alignItems:'center',
        margin:5,
        maxWidth: Dimensions.get('window').width/2,

    },
    image:{
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width/3,
        borderRadius:10,
        
        

        

    },
    image_container:{
        backgroundColor:'white',
        height:250,
        margin:5,
        padding:10,
        borderRadius:10,
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        margin:10,

        
      },
    price:{
        color:'grey',
        fontWeight:'bold',
        fontSize:10,
        margin:10,

    },
    inStock:{
        color:'red',
        fontWeight:'bold',
        fontSize:15,
        margin:10,

    },
    input:{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius:10,
            backgroundColor:'white',
            borderColor:'grey',
            width: Dimensions.get('window').width/1.5,
            
          },
    }

)