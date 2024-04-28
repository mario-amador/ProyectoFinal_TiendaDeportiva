import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const TenisTacos = ({ navigation }) => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Puma Ultra Grip 3 Rc Unisex', imagen: require('../assets/Producto30.jpg'), precio: ' 955.95', tallas: ['10', '11'], cantidad: 0, tallaSeleccionada: '' },
    { id: 2, nombre: 'Adidas Predator 20 Pro Fingersave', imagen: require('../assets/Producto31.jpg'), precio: ' 1 953.36', tallas: ['5', '6', '7'], cantidad: 0, tallaSeleccionada: '' },
    { id: 3, nombre: 'Nike Gk Match - Fa20 Unisex', imagen: require('../assets/Producto32.png'), precio: ' 955.95', tallas: ['8','9','10'], cantidad: 0, tallaSeleccionada: '' },
    { id: 4, nombre: 'Nike GK Mercurial Touch Elite', imagen: require('../assets/Producto33.jpg'), precio: ' 6,297.99', tallas: ['6','7','8', '9','10'], cantidad: 0, tallaSeleccionada: '' },
    { id: 5, nombre: 'Puma Ultra Grip 1 Hybrid Pro', imagen: require('../assets/Producto34.jpg'), precio: ' 1,125.95', tallas: ['Unica', '5'], cantidad: 0, tallaSeleccionada: '' },
    { id: 6, nombre: 'Nike Vapor Grip 3', imagen: require('../assets/Producto35.jpg'), precio: ' 3,395.95', tallas: ['7', '7.5','8', '8.5', '10'], cantidad: 0, tallaSeleccionada: '' },
  ]);

  const agregarAlCarrito = async (producto) => {
    console.log(`Agregado al carrito: ${producto.nombre}`);

    try {
      const carritoRef = firestore().collection('carrito');
      await carritoRef.add({
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        cantidad: producto.cantidad,
        tallaSeleccionada: producto.tallaSeleccionada,
      });

      navigation.navigate('CarritoCompra', { producto });
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  };

  const agregarAFavoritos = async (producto) => {
    console.log(`Agregado a favoritos: ${producto.nombre}`);

    try {
      const favoritosRef = firestore().collection('favoritos');
      await favoritosRef.add({
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        cantidad: producto.cantidad,
        tallaSeleccionada: producto.tallaSeleccionada,
      });

      navigation.navigate('Favoritos', { producto });
    } catch (error) {
      console.error('Error al agregar a favoritos:', error);
    }
  };

  const incrementarCantidad = (producto) => {
    setProductos((prevProductos) =>
      prevProductos.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const decrementarCantidad = (producto) => {
    setProductos((prevProductos) =>
      prevProductos.map((p) =>
        p.id === producto.id && p.cantidad > 0 ? { ...p, cantidad: p.cantidad - 1 } : p
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Guantes de Fútbol</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.productosContainer}>
          {productos.map((producto) => (
            <View key={producto.id} style={styles.producto}>
              <Image source={producto.imagen} style={styles.imagen} />
              <Text style={styles.nombre}>{producto.nombre}</Text>
              <Text style={styles.precio}>Lps{producto.precio}</Text>
              <View style={styles.tallasContainer}>
                {producto.tallas.map((talla, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.tallaButton, talla === producto.tallaSeleccionada ? styles.tallaSeleccionada : null]}
                    onPress={() => {
                      setProductos((prevProductos) =>
                        prevProductos.map((p) =>
                          p.id === producto.id ? { ...p, tallaSeleccionada: talla } : p
                        )
                      );
                      console.log(`Talla seleccionada: ${talla}`);
                    }}
                  >
                    <Text style={styles.tallaText}>{talla}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.botonesContainer}>
                <TouchableOpacity style={styles.botonCarrito} onPress={() => agregarAlCarrito(producto)}>
                  <Image source={require('../assets/Carrito.png')} style={styles.botonIcono} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFavoritos} onPress={() => agregarAFavoritos(producto)}>
                  <Image source={require('../assets/Favorito.png')} style={styles.botonIcono} />
                </TouchableOpacity>
              </View>
              <View style={styles.cantidadContainer}>
                <TouchableOpacity style={styles.cantidadButton} onPress={() => decrementarCantidad(producto)}>
                  <Text style={styles.cantidadText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cantidad}>{producto.cantidad}</Text>
                <TouchableOpacity style={styles.cantidadButton} onPress={() => incrementarCantidad(producto)}>
                  <Text style={styles.cantidadText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  productosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  producto: {
    width: '45%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  imagen: {
    width: '100%',
    height: 125,
    marginBottom: 10,
    resizeMode: 'cover',
    alignSelf: 'center',
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
  cantidadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cantidadButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    marginRight: 5,
  },
  cantidadText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cantidad: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 20,
    marginTop: 5,
    padding: 9,
    color: 'black'
  },
  tallasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tallaButton: {
    backgroundColor: 'lightblue',
    padding: 9,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
  },
  tallaText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tallaSeleccionada: {
    backgroundColor: 'blue',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  botonCarrito: {
    backgroundColor: 'green',
    padding: 6,
    borderRadius: 5,
    marginLeft: 15,
  },
  botonFavoritos: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 5,
    marginRight: 15,
  },
  botonIcono: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default TenisTacos;