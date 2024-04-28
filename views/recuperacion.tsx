import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const FRecuperacion = require('../assets/Recuperacion.jpg');

const Recuperacion = () => {
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation();

  const handleCancelar = () => {
    navigation.navigate('Login');
  };

  const handleEnviarCorreo = () => {
    if (!email) {
      alert('Por favor ingrese un correo electrónico válido.');
      return;
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log(`Correo enviado a: ${email}`);
        alert('Se ha enviado un correo para restablecer la contraseña.');
      })
      .catch((error) => {
        console.error('Error al enviar correo:', error);
        alert('Ha ocurrido un error al enviar el correo. Por favor, intente nuevamente.');
      });
  };

  return (
    <ImageBackground source={FRecuperacion} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Restaurar Contraseña</Text>
        <Text style={styles.message}>Ingrese su correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor={'gray'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" onPress={handleCancelar} />
          <Button title="Enviar Correo" onPress={handleEnviarCorreo} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black'
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Recuperacion;