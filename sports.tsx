import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const sports = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>sports</Text>
      <Text>hallo</Text>
    </View>
  )
}

export default sports

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        color:"white",
    },
    heading:{
        borderBottomColor:"white",
        fontSize:40,
        fontWeight:"bold",
        color:"white",
        marginBottom:20,
        padding:10
    },
    
})