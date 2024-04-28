import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Camisa = ({ navigation }) => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'FC Barcelona Home Jersey 23/24', imagen: require('../assets/Producto29.jpg'), precio: ' 1,995.95', tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], cantidad: 0, tallaSeleccionada: '' },
    { id: 2, nombre: 'Manchester City Third Jersey 23/24', imagen: require('../assets/139966.jpg'), precio: ' 1,995.95', tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], cantidad: 0, tallaSeleccionada: '' },
    { id: 3, nombre: 'Boca Juniors Home Jersey 22/23', imagen: require('../assets/Producto25.jpg'), precio: ' 1,295.95', tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], cantidad: 0, tallaSeleccionada: '' },
    { id: 4, nombre: 'CD olimpia Home Jersey 22/23', imagen: require('../assets/Producto26.jpg'), precio: ' 1,195.95', tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], cantidad: 0, tallaSeleccionada: '' },
    { id: 5, nombre: 'LFC Barcelona Away Jersey 23/24', imagen: require('../assets/Producto28.jpg'), precio: ' 2,495.95', tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], cantidad: 0, tallaSeleccionada: '' },
    { id: 6, nombre: 'Real Madrid Away Jersey 23/24', imagen: require('../assets/Producto5.jpg'), precio: ' 1,747.99', tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], cantidad: 0, tallaSeleccionada: '' },
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
      <Text style={styles.titulo}>Camisas de Fútbol</Text>
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
    height: 160,
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

export default Camisa;