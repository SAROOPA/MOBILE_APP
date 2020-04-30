import React from 'react';
import{View , Text ,StyleSheet,Button} from 'react-native';
export default  function Home({navigation}) {

const PressChange = () => {
    navigation.navigate('RegForm');
}
  return(
        <View>
            <Text style= {styles1.text}> HOME SCREEN </Text>
            <Button title='form' onPress={PressChange}/>
        </View>
        )
}
const styles1 = StyleSheet.create({
    text:{
        fontFamily:'serif',
        color:'purple',
        fontWeight:'bold',
        marginTop: 40,
        marginBottom:40,
        fontSize:20,
        textAlign: 'center'
        
    }
})