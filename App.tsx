/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Bienvenida from './views/bienvenida';
import Login from './views/login';
import Solicitud from './views/solicitud';
import Navegacion from './views/navegacion'
import TacosFutbol from './views/tacosfutbol';
import TenisTacos from './views/tenistacos';
import Balon from './views/balon';
import Camisa from './views/camisa';
import Guante from './views/guante';
import Equipacion from './views/equipacion';
import CarritoCompra from './views/carritocompra';
import Favoritos from './views/favorito';
import Recuperacion from './views/recuperacion';
import Botones from './views/botones';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name ="Login" component={Login} />
        <Stack.Screen name="Solicitud" component={Solicitud} />
        <Stack.Screen name="Recuperacion" component={Recuperacion} />
        <Stack.Screen name="Navegacion" component={Navegacion} />
        <Stack.Screen name="TacosFutbol" component={TacosFutbol} />
        <Stack.Screen name="TenisTacos" component={TenisTacos} />
        <Stack.Screen name="Balon" component={Balon} />
        <Stack.Screen name="Camisa" component={Camisa} />
        <Stack.Screen name="Guante" component={Guante} />
        <Stack.Screen name="Equipacion" component={Equipacion} />
        <Stack.Screen name="CarritoCompra" component={CarritoCompra} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Botones" component={Botones} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;