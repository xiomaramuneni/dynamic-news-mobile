import { View, Text, StyleSheet} from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Uz News</Text>
      <Text style={styles.text2}>Here you can find day to da updates and current affairs about the Unversity Of Zimbabwe.</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    color:"white",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"white",
    fontSize:50,
    textAlign:"center",
    fontWeight:"bold"
  },
  text2:{
    color:"white",
    fontSize:20,
    fontWeight:"bold"
  }

})
