import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import FromButton from '../components/FromButton';

const HomeScreen = () => {
    return (
        <Text style={styles.text}> Welcom</Text>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    // container : {
    //     backgroundColor: '#f9fafd' , 
    //     flex : 1,
    //     justifyContent : 'center',
    //     alignItems : 'center',
    //     padding: 20
    // },
    text : {
        fontSize : 20,
        color : 'red',
    },

})
