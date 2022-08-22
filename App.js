import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


function App() {


  const[img, setImg] = useState(require('./src/biscoito.png'));
  const[textoFrase, setTextoFrase] = useState('');

  let frases = [
   'Olhe para cima, que é de lá que vem tua força!',
   'Agora é a hora de começar a surpreender aqueles que duvidaram de você!',
   'Não importa o que você decidiu. O que importa é que isso te faz feliz.',
   'Você nunca será velho demais para sonhar um novo sonho.',
   'Pensando em desistir? Firme-se nos motivos que te fizeram começar.',
   'Se não puder fazer tudo, faça tudo que puder.',
   'Comece onde você está. Use o que você tem. Faça o que puder.',
   'Por mais difícil que algo possa parecer, jamais desista antes de tentar!',
   'Valorize as pequenas conquistas.',
   'No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.',
];

  function quebrabiscoito(){
      let numeroAleatorio = Math.floor(Math.random()* frases.length)
      setTextoFrase(' " '+frases[numeroAleatorio]+' " ');
      setImg(require('./src/biscoitoAberto.png'));
  }

 function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');

 }

  return (
    <View style={styles.container}>

      <Image
        source={img}
       style={styles.img}
      />
    
    <Text style={styles.textofrase}> {textoFrase} </Text>

    <TouchableOpacity style= {styles.botao} onPress={quebrabiscoito}>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}> Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity> 

    <TouchableOpacity style= {[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={reiniciarBiscoito}>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto,{color:'#121212'}]}> Reiniciar Biscoito</Text>
      </View>
    </TouchableOpacity>


    </View>

  );
 }

 const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"  
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd722b'
  }
 })

export default App;

