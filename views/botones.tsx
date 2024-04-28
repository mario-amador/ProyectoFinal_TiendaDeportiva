import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import inicioIcon from '../assets/Inicio.png';
import carritoIcon from '../assets/CarritoCompra.png';
import favoritosIcon from '../assets/PFavorito.png';
import perfilIcon from '../assets/Usuario.png';

const Botones = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity>
        <Image source={inicioIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={carritoIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={favoritosIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={perfilIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Botones;