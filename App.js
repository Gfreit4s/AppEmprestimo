import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button,Alert } from 'react-native'; 

class App extends Component{
  render(){
    return(
      <View style={styles.area} >
        <Text style={styles.textoPrincipal}>Money Cash</Text>
        <Image  style={styles.img}
        source={require('./img/dinheiro.png')}
        />
        <View style={styles.input}>
        <Button 
          onPress={() => Alert.alert('Voce solicitou um emprestimo')}
          title="Solicitar Emprestimo"
          color="#FFC608"
        />
        
        
      </View>
        

      </View>
    );
  }
}



const styles = StyleSheet.create({
  img:{
    height:250,
    width:250,
  },
  area:{
    flex: 1,
    alignItems:'center',
    padding: 100,
    backgroundColor: '#36CC84',
  },
  textoPrincipal:{
    
    fontSize :25,
  },
  textoPrincipal: {
      fontSize: 35,
      textAlign: 'center',
      marginVertical: 10,
      color: '#fff',
  },
  input: {
    marginVertical: 90,
      }
    

  
});

export default App;