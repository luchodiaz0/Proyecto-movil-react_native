import React from 'react'
import {Modal, Text, Button, View, StyleSheet, TextInput, ScrollView, Pressable} from 'react-native'
import DatePicker from 'react-native-ui-datepicker'

const  Formulario = ({modalVisible,setModalVisible}) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [Sintomas, setSintomas] = useState('')
  return (
    <Modal animationType='slide' visible={modalVisible}>
        <View style={StyleSheet.contenido}>
            <ScrollView>

                <Text style={StyleSheet.titulo}>Nueva {''}
                    <Text style={StyleSheet.tituloBold}>Cita</Text>
                </Text>

                {/* Creacion del boton para cerrar el modal*/}
                <Pressable
                    style={styles.btnCancelar}
                    onLongPress={()=>setModalVisible(!modalVisible)}>
                    <Text style={styles.btnCancelarTexto}>X cancelar</Text>
                </Pressable>

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
                    <text style={styles.label}>telefono propietarios</text>
                </View>

                <View style={styles.campo}>
                            <Text style={styles.label}>fecha alta</Text>
                    <View style={styles.fechacontenedor}>
                        <DatePicker
                                date={fecha}
                                locate='es'
                                mode='date'
                                onValueChange={(date)=>setFecha(date)}//para seleccaionar la fecha
                            />
                    </View>

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
                
                <Pressable style={styles.btnNuevaCita}>
                    <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
                </Pressable>

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
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
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
    },
    fechacontenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        textAling: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    },
})

export default Formulario