import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CarritoCompra = ({ route }) => {
  const { producto } = route.params;

  const guardarProductoCompradosFirestore = async () => {
    try {
      const productoscompradosRef = firestore().collection('productoscomprados');
      await productoscompradosRef.add(producto);
      console.log('Producto Comprado guardado en Firestore');
    } catch (error) {
      console.error('Error al guardar el producto en Firestore:', error);
    }
  };

  useEffect(() => {
    guardarProductoCompradosFirestore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrito de Compra</Text>
      <View style={styles.producto}>
        <Image source={producto.imagen} style={styles.imagen} />
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.precio}>Lps {producto.precio}</Text>
        <Text style={styles.cantidad}>Cantidad: {producto.cantidad}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  producto: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
  },
  precio: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
  },
  cantidad: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default CarritoCompra;