import React from 'react'
import {Modal, Text, Button, View, StyleSheet, TextInput, ScrollView} from 'react-native'

const  Formulario = () => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Sintomas, setSintomas] = useState('')
  return (
    <Modal animationType='slide' visible={modalVisible}>
        <View style={StyleSheet.contenido}>
            <ScrollView>

                <Text style={StyleSheet.titulo}>Nueva {''}
                    <Text style={StyleSheet.tituloBold}>Cita</Text>
                </Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre paciente</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Nombre del paciente'
                    placeholderTextColor={'#666'}
                    value={paciente}
                    onChangeText={setPaciente}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Propietario</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Nombre del Propietario'
                    placeholderTextColor={'#666'}
                    value='propietario'
                    onChangeText={setPropietario}/>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Email propietario</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Sintomas'
                    placeholderTextColor={'#666'}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono propietario</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Telefono'
                    placeholderTextColor={'#666'}
                    keyboardType='number-pad'
                    value={telefono}
                    onChangeText={setTelefono}
                    maxLength={10}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Sintomas Paciente'
                    placeholderTextColor={'#666'}
                    value={sintomas}
                    onChangeText={setSintomas}
                    multiline={true}
                    numberOfLines={4}
                    />
                </View>
            </ScrollView>
        </View>

    </Modal>
  )
}

const styles=StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAling: 'center',
        marginTop: 30,
        color: '#fff',
    },
    tituloBold: {
        fontWeight: '900',
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: 'FFF',
        padding: 15,
        borderRadius: 10,
    },
    sintomasInput: {
        height: 100,
    }
})

export default Formulario