import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('Hombre');
  const profileImages = {
    Hombre: require('../assets/Hombre.png'),
    Mujer: require('../assets/Mujer.png'),
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso:', userCredential.user.email);
      navigation.navigate('Navegacion');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Solicitud');
  };

  const handleForgotPassword = () => {
    navigation.navigate('Recuperacion');
  };

  return (
    <ImageBackground
      source={require('../assets/Solicitud.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={profileImages[gender]} style={styles.profileImage} />
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.registerText}>Por favor, inicia sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="grey"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Contraseña"
          placeholderTextColor="grey"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.genderButtons}>
          <TouchableOpacity onPress={() => setGender('Hombre')}>
            <Text style={styles.genderButtonText}>Hombre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGender('Mujer')}>
            <Text style={styles.genderButtonText}>Mujer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  registerText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  passwordInput: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    marginBottom: 20,
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerButtonText: {
    textDecorationLine: 'underline',
    color: 'black',
  },
  genderButtons: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingTop: 20,
  },
  genderButtonText: {
    marginRight: 10,
    color: 'gray',
  },
});

export default Login;