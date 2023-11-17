import {StyleSheet, Text, View, Pressable, Button, Modal} from 'react-native';
import {Card} from 'react-native-paper';
import React, {useState} from 'react';
import Formulario from './src/componentes/Formulario';

const App = () => {

  //los Hooks se colocan en la parte superior


  const [modalVisible, setModalVisible]=useState(false)
  console.log(modalVisible)

  setTimeout(()=>{
    setModalVisible(true)
  }, 3000);

  const nuevaCita = () => {
    console.log('Presionaste el botón')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrados de citas <Text style={styles.tituloBold}>veterinaria</Text>
      </Text>
      <Pressable Onpress={()=>setModalVisible(!modalVisible)} style={styles.bntnuevacita}>
      <Text style={styles.btnextnuevascitas}>Nueva Cita </Text>
      </Pressable>

      <Formulario
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
    </View>
    );
}

const styles= StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f3f4f6',
    flex: 1,
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 600,
    color: '#374151',
    textAling: 'center',
  },
  tituloBold: {
    fontWeight: 900,
    color: '#6D28D9',
  },
  bntnuevacita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btnextnuevascitas: {
    textAling: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 900,
    textTransform: 'uppercase',
  },
});


export default App;