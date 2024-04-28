import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import tacoImage from '../assets/Tacos.png';
import tenisTacosImage from '../assets/TenisTacos.jpg';
import balonImage from '../assets/BalonUEFA.png';
import camisaImage from '../assets/CamisaDF.png';
import guanteImage from '../assets/Guantes.png';
import uniformeImage from '../assets/Uniforme.png';
import Camisa from '../assets/Producto29.jpg';
import Balon from '../assets/Producto22.jpg';
import Guante from '../assets/Producto31.jpg';
import Equipacion from '../assets/Producto39.jpg';
import Tacos from '../assets/Producto1.jpg';
import Tenis from '../assets/Producto3.jpg';
import Nike from '../assets/Nike.png';
import Adidas from '../assets/Adidas.png';
import Puma from '../assets/Puma.png';
import Umbro from '../assets/Umbro.png';

import BottomNavigation from './botones';

const Navegacion = () => {
  const [buscarProducto, setBuscarProducto] = useState('');
  const [productos, setProductos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosSnapshot = await firestore().collection('productos').get();
        const listaProductos = productosSnapshot.docs.map(doc => doc.data());
        setProductos(listaProductos);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    cargarProductos();
  }, []);

  const handleVerTacos = (image) => {
    navigation.navigate('TacosFutbol', { image });
  };

  const handleVerTenisTacos = (image) => {
    navigation.navigate('TenisTacos', { image });
  };

  const handleVerBalon = (image) => {
    navigation.navigate('Balon', { image });
  };

  const handleVerCamisa = (image) => {
    navigation.navigate('Camisa', { image });
  };

  const handleVerGuante = (image) => {
    navigation.navigate('Guante', { image });
  };

  const handleVerEquipacion = (image) => {
    navigation.navigate('Equipacion', { image });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.AcostaSports}>Acosta Sports</Text>
        </View>
        <View style={styles.InnerContainer}>
          <Text style={styles.Bienvenida}>Bienvenidos a nuestra App</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Buscar producto"
          placeholderTextColor="grey"
          value={buscarProducto}
          onChangeText={setBuscarProducto}
        />
        <View style={styles.marcaContainer}>
          <Text style={styles.tituloMarca}>Marcas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.marcaScrollContainer}>
            <Image source={Puma} style={styles.marcapuma} />
            <Image source={Nike} style={styles.marcanike} />
            <Image source={Adidas} style={styles.marcaadidas} />
            <Image source={Umbro} style={styles.marcaumbro} />
          </ScrollView>
        </View>
        <View style={styles.categoriasContainer}>
          <Text style={styles.tituloCategoria}>Categorías</Text>
          <TouchableOpacity style={styles.categoriaItemContainer} onPress={() => handleVerTacos(tacoImage)}>
            <View style={styles.categoriaItem}>
              <Image source={tacoImage} style={[styles.iconoCategoria, styles.tacoIcono]} />
              <Text style={styles.textoCategoria}>Tacos de Fútbol</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaItemContainer} onPress={() => handleVerTenisTacos(tenisTacosImage)}>
            <View style={styles.categoriaItem}>
              <Image source={tenisTacosImage} style={[styles.iconoCategoria, styles.tenisTacosIcono]} />
              <Text style={styles.textoCategoria}>Tenis Tacos de Fútbol</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaItemContainer} onPress={() => handleVerBalon(balonImage)}>
            <View style={styles.categoriaItem}>
              <Image source={balonImage} style={[styles.iconoCategoria, styles.balonIcono]} />
              <Text style={styles.textoCategoria}>Balones de Fútbol</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaItemContainer} onPress={() => handleVerCamisa(camisaImage)}>
            <View style={styles.categoriaItem}>
              <Image source={camisaImage} style={[styles.iconoCategoria, styles.camisaIcono]} />
              <Text style={styles.textoCategoria}>Camisas de Fútbol</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaItemContainer} onPress={() => handleVerGuante(guanteImage)}>
            <View style={styles.categoriaItem}>
              <Image source={guanteImage} style={[styles.iconoCategoria, styles.guanteIcono]} />
              <Text style={styles.textoCategoria}>Guantes de Fútbol</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaItemContainer} onPress={() => handleVerEquipacion(uniformeImage)}>
            <View style={styles.categoriaItem}>
              <Image source={uniformeImage} style={[styles.iconoCategoria, styles.uniformeIcono]} />
              <Text style={styles.textoCategoria}>Equipación de Fútbol</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer}>
          <Text style={[styles.tituloPopulares, { marginTop: -8 }]}>Productos Populares</Text>
          <View style={styles.productoGrid}>
            <View style={styles.productoRow}>
              <TouchableOpacity style={styles.productoItem}>
                <Image source={Tacos} style={styles.producto1} />
                <Text style={styles.textoProducto}>Nike Mercurial Superfly 9 Club FG</Text>
                <Text style={styles.precio}>Precio: Lps 1,747.99</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.productoItem}>
                <Image source={Tenis} style={styles.producto1} />
                <Text style={styles.textoProducto}>Adidas NEMEZIZ 18.1 FG</Text>
                <Text style={styles.precio}>Precio: Lps 2,690.00</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productoRow}>
              <TouchableOpacity style={styles.productoItem}>
                <Image source={Balon} style={styles.producto1} />
                <Text style={styles.textoProducto}>Neymar Jr Graphic Ball S3 Unisex</Text>
                <Text style={styles.precio}>Precio: Lps 1,719.99</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.productoItem}>
                <Image source={Camisa} style={styles.producto1} />
                <Text style={styles.textoProducto}>FC Barcelona Home Jersey 23/24</Text>
                <Text style={styles.precio}>Precio: Lps 1,995.95</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productoRow}>
              <TouchableOpacity style={styles.productoItem}>
                <Image source={Guante} style={styles.producto1} />
                <Text style={styles.textoProducto}>Adidas Predator 20 Pro Fingersave</Text>
                <Text style={styles.precio}>Precio: Lps 1,953.36</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.productoItem}>
                <Image source={Equipacion} style={styles.producto1} />
                <Text style={styles.textoProducto}>AC Milan 1ª Equipación 23/24</Text>
                <Text style={styles.precio}>Precio: Lps 2,155.95</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  AcostaSports: {
    fontSize: 20,
    marginBottom: 20,
    color: '#bf930d',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: -10,
    padding: 10,
    marginTop: -10,
    marginLeft: 75,
  },
  Bienvenida: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: -10,
    padding: 10,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'black',
  },
  marcaContainer: {
    marginBottom: 20,
  },
  tituloMarca: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  marcaScrollContainer: {
    alignItems: 'center',
  },
  marcanike: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  categoriasContainer: {
    marginBottom: 20,
  },
  tituloCategoria: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  categoriaItemContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
    marginBottom: 10,
    padding: 10,
  },
  categoriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  textoCategoria: {
    fontSize: 16,
    color: 'blue',
  },
  tacoIcono: {
    width: 70,
    height: 50,
    marginRight: 10,
  },
  tenisTacosIcono: {
    width: 70,
    height: 60,
    marginRight: 10,
  },
  balonIcono: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  camisaIcono: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  guanteIcono: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  uniformeIcono: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  tituloPopulares: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  productoGrid: {
    flexDirection: 'column',
  },
  productoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productoItem: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginBottom: 10,
    alignItems: 'center',
  },
  producto1: {
    width: 100,
    height: 100,
    padding: 10,
    marginTop: 10,
  },
  textoProducto: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
  },
  productContainer: {
    margin: 2,
    padding: -20,
  },
  precio: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
  marcaadidas: {
    width: 100,
    height: 58,
    marginRight: 10,
    borderRadius: 10,
  },
  marcapuma: {
    width: 100,
    height: 58,
    marginRight: 10,
    borderRadius: 10,
  },
  marcaumbro: {
    width: 110,
    height: 72,
    marginRight: 10,
    borderRadius: 10,
  },
  InnerContainer: {
    alignItems: 'center',
    marginTop: -90,
  },
});

export default Navegacion;