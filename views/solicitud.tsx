import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

const Solicitud = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, contrasena);
      console.log('Usuario creado:', userCredential.user);

      navigation.navigate('Login', { email, contrasena });
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Solicitud.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Por favor complete la información que se solicita a continuación:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombres"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setNombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setApellidos(text)}
          value={apellidos}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setContrasena(text)}
          value={contrasena}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setConfirmarContrasena(text)}
          value={confirmarContrasena}
          secureTextEntry
        />
        <Button title="Registrarse" onPress={handleRegistro} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Solicitud;