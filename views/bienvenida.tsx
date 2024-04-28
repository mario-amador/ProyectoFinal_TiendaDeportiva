import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Bienvenida = ({ navigation }) => {
    const handlesPressInicio = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.Contenedor}>
            <Image
                source={require('../assets/AcostaSports.png')}
                style={styles.ImagenFondo}
            />
            <ScrollView contentContainerStyle={styles.ScrollContainer}>
                <View style={styles.InnerContainer}>
                    <Text style={styles.Titulo}>Bienvenido a nuestra App</Text>
                    <Text style={styles.Eslogan}>Atrévete a ser grande y supera tus límites, con el estilo que te mueve</Text>
                    <Button title="Ingresar" onPress={handlesPressInicio} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1,
        backgroundColor: 'white',
    },
    ImagenFondo: {
        position: 'absolute',
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        opacity: 0.6,
    },
    ScrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    InnerContainer: {
        alignItems: 'center',
        marginTop: 380,
    },
    Titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        padding: -20,
    },
    Eslogan: {
        fontSize: 20,
        marginBottom: 20,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: -10,
        padding: 50,
    },
});

export default Bienvenida;